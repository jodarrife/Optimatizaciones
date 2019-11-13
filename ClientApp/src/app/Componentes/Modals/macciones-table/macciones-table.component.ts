import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-macciones-table',
  templateUrl: './macciones-table.component.html',
  styleUrls: ['./macciones-table.component.css']
})
export class MAccionesTableComponent implements OnInit {

  @Input() title;
  constructor(public activeModal:NgbActiveModal) { }

  ngOnInit() {
  }

}
