import { Component } from '@angular/core';
import { Alumno } from './interface/Alumno';

@Component({
  selector: 'app-alumnos',
  standalone: false,
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos {
  nombre: string = 'Mariana';
  apellido: string = 'Luna';
  edad: number = 20;

  h1Style = 'font-size: 55px; color: blue;';

  alumnoList: Alumno[] = [

    { id: 1, nombre: 'Lucía', apellido: 'Gómez', edad: 22, email: 'lucia.gomez@example.com' },
    { id: 2, nombre: 'Mateo', apellido: 'Pérez', edad: 24, email: 'mateo.perez@example.com' },
    { id: 3, nombre: 'Valentina', apellido: 'Rodríguez', edad: 21, email: 'valentina.rodriguez@example.com' },
    { id: 4, nombre: 'Santiago', apellido: 'Fernández', edad: 23, email: 'santiago.fernandez@example.com' },
    { id: 5, nombre: 'Camila', apellido: 'López', edad: 20, email: 'camila.lopez@example.com' },
    { id: 6, nombre: 'Tomás', apellido: 'Martínez', edad: 25, email: 'tomas.martinez@example.com' },
    { id: 7, nombre: 'Martina', apellido: 'Díaz', edad: 22, email: 'martina.diaz@example.com' }

  ];

  onAddAlumno(alumno: Alumno) {
    this.alumnoList.push({
      ...alumno,
      id: this.alumnoList[this.alumnoList.length - 1].id + 1,
      
    });
  }

}
