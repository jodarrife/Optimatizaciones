import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private isUserLoggedIn;
    public username;

  constructor() {
    this.isUserLoggedIn=false;
   }

   serUserLoggedId(){
     this.isUserLoggedIn=true;
     this.username = 'Administrador';
   }
   getUserLoggedId(){
    return this.isUserLoggedIn;
  }
}