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

  usuarioForm!: FormGroup<{
    nombre: FormControl<string | null>;
    apellidoPaterno: FormControl<string | null>;
    apellidoMaterno: FormControl<string | null>;
    telefono: FormControl<string | null>;
    correo: FormControl<string | null>;
    username: FormControl<string | null>;
    foto: FormControl<string | null>;
  }>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const usuario: Usuario = this.data.usuario || {
      id: 0,
      nombre: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      telefono: '',
      correo: '',
      username: '',
      foto: ''
    };

    this.usuarioForm = new FormGroup({
      nombre: new FormControl(usuario.nombre, [Validators.required, Validators.minLength(3)]),
      apellidoPaterno: new FormControl(usuario.apellidoPaterno, Validators.required),
      apellidoMaterno: new FormControl(usuario.apellidoMaterno),
      telefono: new FormControl(usuario.telefono, [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      correo: new FormControl(usuario.correo, [Validators.required, Validators.email]),
      username: new FormControl(usuario.username, [Validators.required, Validators.minLength(4)]),
      foto: new FormControl(usuario.foto || null)
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.usuarioForm.patchValue({
          foto: reader.result as string
        });
      };

      reader.readAsDataURL(file);
    }
  }

  get formulario() { return this.usuarioForm.controls; }
}
