import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../services/docente.service';
import { Docente } from '../../../models/docente';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent implements OnInit {

  docentes:Docente[];
  constructor(private docenteService:DocenteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.docenteService.getAll().subscribe(
      docentes=>this.docentes=docentes);
  }

}