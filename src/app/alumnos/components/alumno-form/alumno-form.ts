import { Component, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from '../../interface/Alumno';

@Component({
  selector: 'app-alumno-form',
  standalone: false,
  templateUrl: './alumno-form.html',
  styleUrl: './alumno-form.css'
})
export class AlumnoForm {
   public alumnoForm: FormGroup;
  @Output() sendAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      edad: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      email: ['', [Validators.email]],
    });
  }

  onSubmit() {
    if (this.alumnoForm.invalid) {
      alert('Los campos deben ser validos');
      return;
    }

    this.sendAlumno.emit(this.alumnoForm.value);
  }

  get isNombreInvalid() {
    return this.alumnoForm.controls['nombre'].dirty && this.alumnoForm.controls['nombre'].invalid;
  }

  get isApellidoInvalid() {
    return this.alumnoForm.controls['apellido'].dirty && this.alumnoForm.controls['apellido'].invalid;
  }
    get isEdadInvalid() {
    return this.alumnoForm.controls['edad'].dirty && this.alumnoForm.controls['edad'].invalid;
  }

  get isEmailInvalid() {
    return this.alumnoForm.controls['email'].dirty && this.alumnoForm.controls['email'].invalid;
  }

}
