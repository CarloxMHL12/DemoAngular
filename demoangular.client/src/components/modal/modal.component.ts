import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    username: ''
  };

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    if (data.modo === 'editar') {
      this.usuario = { ...data.usuario };
    }
  }
}
