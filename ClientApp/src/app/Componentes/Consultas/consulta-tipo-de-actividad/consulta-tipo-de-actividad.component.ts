import { Component, OnInit } from '@angular/core';
import { RegTipoDeActividadComponent } from '../../Modals/reg-tipo-de-actividad/reg-tipo-de-actividad.component';
import { TipoDeActividadService } from '../../../services/tipo-de-actividad.service';
import { TipoDeActividad } from '../../../models/tipo-de-actividad';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

@Component({
  selector: 'app-consulta-tipo-de-actividad',
  templateUrl: './consulta-tipo-de-actividad.component.html',
  styleUrls: ['./consulta-tipo-de-actividad.component.css']
})
export class ConsultaTipoDeActividadComponent implements OnInit {
  tipoDeActividad: TipoDeActividad[];
  
  constructor(private modalService:NgbModal,private tipoDeActividadService: TipoDeActividadService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.tipoDeActividadService.getAll().subscribe(tipoDeActividad=>this.tipoDeActividad=tipoDeActividad);
    }

    open(){
      const modalRef = this.modalService.open(RegTipoDeActividadComponent, {centered: true});
    }
}



