import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoForm } from './alumno-form';

describe('AlumnoForm', () => {
  let component: AlumnoForm;
  let fixture: ComponentFixture<AlumnoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
