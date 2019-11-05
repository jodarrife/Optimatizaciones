import { Component, OnInit } from '@angular/core';
import { Acciones } from '../../../models/acciones';
import { AccionesService } from 'src/app/services/acciones.service';


@Component({
  selector: 'app-registro-acciones',
  templateUrl: './registro-acciones.component.html',
  styleUrls: ['./registro-acciones.component.css']
})
export class RegistroAccionesComponent implements OnInit {
  constructor(private accionesService: AccionesService) { }
  acciones: Acciones;

  ngOnInit() {
  this.acciones = new Acciones();
  }

  add() {
    this.accionesService.addAcciones(this.acciones)
      .subscribe(acciones => {
        alert('Se agrego un nuevo acciones')
      });
  }
}

