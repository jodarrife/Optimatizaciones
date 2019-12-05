import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DocenteViewModel } from '../Models/docente-view-model';


@Component({
  selector: 'app-modal-consulta-docente',
  templateUrl: './modal-consulta-docente.component.html',
  styleUrls: ['./modal-consulta-docente.component.css']
})
export class ModalConsultaDocenteComponent {

  constructor(public activeModal: NgbActiveModal) { }

  actualizar(docente: DocenteViewModel) {
    this.activeModal.close(docente);
  }

}
