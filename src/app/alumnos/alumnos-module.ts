import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumnos } from './alumnos';
import { AlumnoList } from './components/alumno-list/alumno-list';
import { AlumnoForm } from './components/alumno-form/alumno-form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared-module';






@NgModule({
  declarations: [
    Alumnos,
    AlumnoList,
    AlumnoForm
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatButtonModule, MatInputModule, SharedModule],
  exports: [Alumnos],
})
export class AlumnosModule { }
