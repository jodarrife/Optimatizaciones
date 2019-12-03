import { Component, OnInit } from '@angular/core';
import { MdEditComponent } from 'app/modals/md-edit/md-edit.component';
import { TaskService } from '../services/task.service'
import { Task } from '../models/task';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RegTipoDeActividadComponent } from '../../Modals/reg-tipo-de-actividad/reg-tipo-de-actividad.component';

@Component({
  selector: 'app-consulta-tipo-de-actividad',
  templateUrl: './consulta-tipo-de-actividad.component.html',
  styleUrls: ['./consulta-tipo-de-actividad.component.css']
})
export class ConsultaTipoDeActividadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
