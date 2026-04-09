import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsuariosComponent } from '../components/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../components/modal/modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    AppComponent, UsuariosComponent, ModalComponent, ConfirmDialogComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule ,MatDividerModule ,MatSnackBarModule, MatIconModule, MatDialogModule, BrowserAnimationsModule, MatInputModule, MatButtonModule, MatCardModule, MatTableModule, MatFormFieldModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
