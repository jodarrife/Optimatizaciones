import { Component, OnInit, Input } from '@angular/core';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-registro-tipo-de-actividad',
  templateUrl: './registro-tipo-de-actividad.component.html',
  styleUrls: ['./registro-tipo-de-actividad.component.css']
})
export class RegistroTipoDeActividadComponent implements OnInit {
  docentes: Docente;
  
  @Input() identificacion:number;

  constructor() { }

  ngOnInit() {
  }

}
