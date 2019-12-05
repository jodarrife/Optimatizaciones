import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DocenteViewModel } from '../Models/docente-view-model';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-consulta-docente',
  templateUrl: './consulta-docente.component.html',
  styleUrls: ['./consulta-docente.component.css']
})
export class ConsultaDocenteComponent {
  searchText: string;
  docentes:DocenteViewModel[];
  @Output() seleccionado = new EventEmitter<DocenteViewModel>();

  constructor(private docenteService:DocenteService) { }

  ngOnInit() {
      this.docenteService.getAll().subscribe(result => {
          this.docentes = result;
          this.searchText = '';
      });
  }

  seleccionar(docente: DocenteViewModel) {
      this.seleccionado.emit(docente);
  }
}
