import { Component, OnInit } from '@angular/core';
import { Acciones } from 'src/app/models/acciones';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-consulta-acciones',
  templateUrl: './consulta-acciones.component.html',
  styleUrls: ['./consulta-acciones.component.css']
})
export class ConsultaAccionesComponent implements OnInit {

  acciones: Acciones[];
  constructor(private accionesService: AccionesService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.accionesService.getAll().subscribe(acciones => this.acciones = acciones);
  }



}