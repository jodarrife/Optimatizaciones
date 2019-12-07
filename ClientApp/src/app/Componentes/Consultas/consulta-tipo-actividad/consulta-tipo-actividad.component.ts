import { Component, OnInit } from '@angular/core';
import { TipoActividadService } from '../../services/tipo-actividad.service';
import { TipoActividad } from 'src/app/models/tipo-actividad';

@Component({
  selector: 'app-consulta-tipo-actividad',
  templateUrl: './consulta-tipo-actividad.component.html',
  styleUrls: ['./consulta-tipo-actividad.component.css']
})
export class ConsultaTipoActividadComponent implements OnInit {
  tipoActividad: TipoActividad[];
  constructor(private tipoActividadService: TipoActividadService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.tipoActividadService.getAll().subscribe(tipoActividad => 
      {
        
        this.tipoActividad = tipoActividad

      });
  }
}