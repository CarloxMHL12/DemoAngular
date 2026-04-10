import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({

  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']

})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  nuevoUsuario: Usuario = {
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    username: '',
    foto: ''
  };

  constructor(private usuarioService: UsuarioService, private dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.usuarios = this.usuarioService.UsuarioGetAll();
  }

  abrirModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: { modo: 'crear' }
    });

    dialogRef.afterClosed().subscribe((usuario: Usuario) => {
      if (usuario) {
        usuario.id = Date.now();
        this.usuarioService.UsuarioAdd(usuario);
        this.usuarios = this.usuarioService.UsuarioGetAll();

        this.snackBar.open('Usuario Agregado correctamente', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  UsuarioUpdate(usuario: Usuario) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: { modo: 'editar', usuario }
    });

    dialogRef.afterClosed().subscribe((usuarioEditado: Usuario) => {
      if (usuarioEditado) {

        usuarioEditado.id = usuario.id;

        this.usuarioService.UsuarioUpdate(usuarioEditado);
        this.usuarios = this.usuarioService.UsuarioGetAll();

        this.snackBar.open('Usuario Actualizado correctamente', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }

  UsuarioDelete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        mensaje: '¿Estás seguro de que deseas eliminar este usuario?'
      }
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado) {
        this.usuarioService.UsuarioDelete(id);
        this.usuarios = this.usuarioService.UsuarioGetAll();

        this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }


}
