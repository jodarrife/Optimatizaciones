import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from '../../../models/docente';
import { TipoActividadService } from '../../../services/tipo-actividad.service';
import { TipoActividad } from '../../../models/tipo-actividad';

@Component({
  selector: 'app-asignar-tipo-de-actividad',
  templateUrl: './asignar-tipo-de-actividad.component.html',
  styleUrls: ['./asignar-tipo-de-actividad.component.css']
})
export class AsignarTipoDeActividadComponent implements OnInit {

  tipoDeActividad: TipoActividad[];
  docentes:Docente[];
  constructor(private docenteService:DocenteService, private tipoDeActividadService: TipoActividadService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.docenteService.getAll().subscribe(docentes=>this.docentes=docentes);
    this.tipoDeActividadService.getAll().subscribe(tipoDeActividad=>this.tipoDeActividad=tipoDeActividad);
  }


}
