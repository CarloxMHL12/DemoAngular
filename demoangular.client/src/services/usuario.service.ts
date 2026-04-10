import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuarios: Usuario[] = [];

  constructor() {
    this.cargarDesdeLocalStorage();
  }

  private guardarEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }

  private cargarDesdeLocalStorage() {
    const data = localStorage.getItem('usuarios');
    if (data) {
      this.usuarios = JSON.parse(data);
    } else {
      this.usuarios = [];
    }
  }

  UsuarioGetAll() {
    return this.usuarios;
  }

  UsuarioAdd(usuario: Usuario) {
    this.usuarios.push(usuario);
    this.guardarEnLocalStorage();
  }

  UsuarioUpdate(usuario: Usuario) {

    const index = this.usuarios.findIndex(usuarioUpdate => usuarioUpdate.id === usuario.id);

    if (index !== -1) {
      this.usuarios[index] = usuario;
      this.guardarEnLocalStorage();
    }

  }

  UsuarioDelete(id: number) {
    this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
    this.guardarEnLocalStorage();
  }
}

