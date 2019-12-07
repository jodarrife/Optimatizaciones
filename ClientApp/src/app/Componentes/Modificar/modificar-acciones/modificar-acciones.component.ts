import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Acciones } from 'src/app/models/acciones';
import { AccionesService } from '../../services/acciones.service';

@Component({
  selector: 'app-modificar-acciones',
  templateUrl: './modificar-acciones.component.html',
  styleUrls: ['./modificar-acciones.component.css']
})
export class ModificarAccionesComponent implements OnInit {
  acciones: Acciones;

  constructor(private route: ActivatedRoute,
    private accionesService: AccionesService,
    private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const cod_Accion =
      +this.route.snapshot.paramMap.get('cod_Accion');
    this.accionesService.get(cod_Accion)
      .subscribe(acciones => this.acciones = acciones);
  }
  update(): void {
    this.accionesService.update(this.acciones)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.accionesService.delete(this.acciones)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}


