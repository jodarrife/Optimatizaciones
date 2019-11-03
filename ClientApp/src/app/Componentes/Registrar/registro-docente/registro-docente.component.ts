import { Component, OnInit } from '@angular/core';
import { DocenteService } from 'src/app/services/docente.service';
import { Docente } from 'src/app/models/docente';


@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.component.html',
  styleUrls: ['./registro-docente.component.css']
})
export class RegistroDocenteComponent implements OnInit {

  constructor(private docenteService: DocenteService) { }
  docente: Docente;
  ngOnInit() {
    this.docente = { Tipo_Documento:'' , 
    Identificacion: '',
    Primer_Nombre: '',
    Segundo_Nombre: '',
    Primer_Apellido: '',
    Segundo_Apellido: '',
    Fecha_Nacimiento: '',
    Edad: 0,
    Genero: '',
    Email: '',
    Telefono: 0,
    Cargo: '',
    Fecha_Vinculacion: '',
    EstadoSys: '',
    Tipo_Docente: ''
     };
  }
  
  add() {
    this.docenteService.addDocente(this.docente)
      .subscribe(task => {
        alert('Se agrego un nuevo docente')
      });
  }
}

