
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DocenteService } from '../../services/docente.service';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-modificar-docente',
  templateUrl: './modificar-docente.component.html',
  styleUrls: ['./modificar-docente.component.css']
})
export class ModificarDocenteComponent implements OnInit {

  docente: Docente;

  constructor(private route: ActivatedRoute, 
    private docenteService: DocenteService, 
    private location: Location) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const identificacion =
      +this.route.snapshot.paramMap.get('identificacion');
    this.docenteService.get(identificacion)
      .subscribe(docente => this.docente = docente);
  }
  update(): void {
    this.docenteService.update(this.docente)
      .subscribe(() => this.goBack());
  }
  delete(): void {
    this.docenteService.delete(this.docente)
      .subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }

}

