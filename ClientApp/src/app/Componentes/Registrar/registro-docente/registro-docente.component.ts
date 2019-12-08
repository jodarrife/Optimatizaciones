import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/docente.service';
import { Docente } from '../../../models/docente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.component.html',
  styleUrls: ['./registro-docente.component.css']
})
export class RegistroDocenteComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private docenteService: DocenteService, private formBuilder: FormBuilder) { }
  docente: Docente;

  ngOnInit() {
    //this.docente = new Docente();
    this.registerForm = this.formBuilder.group({
      tipo_Documento: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.minLength(5)]],
      primer_Nombre: ['', [Validators.required, Validators.minLength(2)]],
      segundo_Nombre: ['', Validators.minLength(2)],
      primer_Apellido: ['', [Validators.required, Validators.minLength(2)]],
      segundo_Apellido: ['', [Validators.required, Validators.minLength(2)]],
      fecha_Nacimiento: ['', [Validators.required]],
      //edad: [19],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      //cargo: ["DOCENTE"],
      fecha_Vinculacion: ['', [Validators.required]],
      //estadoSys: ["ACTIVO"],
      tipo_Docente: ['', [Validators.required]],
      user_Name: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]]

    });
  }

  add() {
    this.docente = this.registerForm.value;
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    this.docenteService.addDocente(this.docente)
      .subscribe(
      );
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}