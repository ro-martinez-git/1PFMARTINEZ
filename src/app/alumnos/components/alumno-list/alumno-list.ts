import { Component, Input, ViewChild } from '@angular/core';
import { Alumno } from '../../interface/Alumno';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-alumno-list',
  standalone: false,
  templateUrl: './alumno-list.html',
  styleUrl: './alumno-list.css'
})
export class AlumnoList {
  @Input() alumnos: Alumno[] = [];

  displayedColumns: string[] = ['id','nombre', 'apellido', 'nombreCompleto', 'edad', 'email'];
  dataSource = new MatTableDataSource<Alumno>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.alumnos;
  }

}

