import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  usuarioForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const usuario: Usuario = this.data.usuario || {
      id: 0,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      correo: '',
      username: ''
    };

    this.usuarioForm = new FormGroup({
      nombre: new FormControl(usuario.nombre, [Validators.required, Validators.minLength(5)]),
      apellidoPaterno: new FormControl(usuario.apellidoPaterno, Validators.required),
      apellidoMaterno: new FormControl(usuario.apellidoMaterno),
      telefono: new FormControl(usuario.telefono, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      correo: new FormControl(usuario.correo, [Validators.required, Validators.email]),
      username: new FormControl(usuario.username, [Validators.required, Validators.minLength(4)])
    });
  }

  get f() { return this.usuarioForm.controls; }
}
