import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/docente.service';
import { Docente } from '../../../models/docente';
import { TipoActividadService } from '../../services/tipo-actividad.service';
import { TipoActividad } from '../../../models/tipo-actividad';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { FormGroup } from '@angular/forms';

import { AlertModalComponent } from '../../Errores/@base/modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-asignar-tipo-de-actividad',
  templateUrl: './asignar-tipo-de-actividad.component.html',
  styleUrls: ['./asignar-tipo-de-actividad.component.css']
})
export class AsignarTipoDeActividadComponent implements OnInit {

  tipoActividad: TipoActividad[];
  docentes: Docente[];
  registerForm: FormGroup;
  tipoAct: TipoActividad;
  submitted = false;

  constructor(
    private docenteService: DocenteService,
    private tipoActividadService: TipoActividadService,
    private modalService: NgbModal) { }

  public identificacion2: Number
  ngOnInit() {
    //this.getAll();


  }
  /* convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  getAll() {
    this.docenteService.getAll().subscribe(docentes => this.docentes = docentes);
    this.tipoActividadService.getAll().subscribe(tipoActividad => { this.tipoActividad = tipoActividad });
  }

  buscarCliente() {
    this.docenteService.get(this.registerForm.value.identificacion).subscribe(docente => {
      if (docente != null) {
        this.f['identificacion'].setValue(docente.identificacion);
        this.f['primer_Nombre'].setValue(docente.primer_Nombre);
        this.f['primer_Apellido'].setValue(docente.primer_Apellido);
        this.f['tipo_Docente'].setValue(docente.tipo_Docente);
        this.f['estadoSys'].setValue(docente.estadoSys);
      }
      else {
        this.openModalCliente();
      }
    });
  }
  /*Manejo Modal
  openModalCliente() {
    this.modalService.open(ModalConsultaDocenteComponent, { size: 'lg' }).result.then((docente) => this.actualizar(docente));
  }

  actualizar(docente: Docente) {

    this.registerForm.controls['identificacion'].setValue(docente.identificacion);
    this.registerForm.controls['primer_Nombre'].setValue(docente.primer_Nombre);
    this.registerForm.controls['primer_Apellido'].setValue(docente.primer_Apellido);
    this.registerForm.controls['tipo_Docente'].setValue(docente.tipo_Docente);
    this.registerForm.controls['estadoSys'].setValue(docente.estadoSys);
  }
  //Fin Manejo Modal

  //Manejo Registrar
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.create();
  }

  create() {
    this.tipoAct = this.registerForm.value;

    this.tipoActividadService.addTipoActividad(this.tipoAct).subscribe(c => {
      if (c != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'SUCCESS!! :-)';
      }
    });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

*/
}
