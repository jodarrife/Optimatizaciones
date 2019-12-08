
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JefeDepartamento } from '../../models/jefe-departamento';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JefeDepartamentoService {

  private isJefeDepartamentoLoggedIn;
  public username;
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) 
  {
    this.isJefeDepartamentoLoggedIn=false;
  }

   //LOGIN
   setJefeLoggedId(){
    this.isJefeDepartamentoLoggedIn=true;
    this.username = 'Administrador';
  }
  getJefeLoggedId(){
   return this.isJefeDepartamentoLoggedIn;
  }
  AddJefeDepartamentoLS(jefeDpto: JefeDepartamento)
  {
    sessionStorage.setItem("Administrador",JSON.stringify(jefeDpto));
  }
}
