import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from '../../../models/docente';


@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.component.html',
  styleUrls: ['./registro-docente.component.css']
})
export class RegistroDocenteComponent implements OnInit {

  constructor(private docenteService: DocenteService) { }
  docente: Docente;

  ngOnInit() {
  this.docente = new Docente();
  }

  add() {
    this.docenteService.addDocente(this.docente)
      .subscribe(docente => {
        alert('Se agrego un nuevo docente')
      });
  }
}

