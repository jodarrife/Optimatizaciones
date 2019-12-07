import { Component, OnInit } from '@angular/core';
import { UserService } from '../Componentes/ComponetesLogin/servicesLogin/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private user:UserService){}
  name='anony';
  ngOnInit(){
    this.name=this.user.username;
    console.log('Estas logueado?' ,this.user.getUserLoggedId());
  }
}
