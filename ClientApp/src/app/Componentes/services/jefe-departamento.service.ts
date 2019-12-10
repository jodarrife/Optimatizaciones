
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { JefeDepartamento } from '../../models/jefe-departamento';
import { HandleErrorService } from '../../Componentes/Errores/@base/services/handle-error.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class JefeDepartamentoService {

  private isJefeDepartamentoLoggedIn;
  public username;
  baseUrl: string;
  isJefeDpto = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleErrorService,
  ) {
    this.isJefeDepartamentoLoggedIn = false;
    this.baseUrl = baseUrl;
  }

/** POST: add a new docente to the server */
addJefeDepartamento(jefeDepartamento: JefeDepartamento): Observable<JefeDepartamento> {
  return this.http.post<JefeDepartamento>(this.baseUrl + 'api/JefeDepartamento', jefeDepartamento, httpOptions).pipe(
    tap((newJefeDepartamento: JefeDepartamento) => this.handleErrorService.log(`added NewJefeDepartamento w/ Identificacion=${newJefeDepartamento.identificacion}`)),
    catchError(this.handleErrorService.handleError<JefeDepartamento>('addJefeDepartamento'))
  );
}

/** GET Docente from the server */
getAll(): Observable<JefeDepartamento[]> {
  return this.http.get<JefeDepartamento[]>(this.baseUrl + 'api/JefeDepartamento').pipe(
    tap(_ => this.handleErrorService.log('datos enviados')),
    catchError(this.handleErrorService.handleError<JefeDepartamento[]>('Consulta JefeDepartamento', null))
  );

}

/** GET Docente by Identificacion. Will 404 if id not found */
get(identificacion: number): Observable<JefeDepartamento> {
  const url = `${this.baseUrl + 'api/JefeDepartamento'}/${identificacion}`;
  return this.http.get<JefeDepartamento>(url)
    .pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<JefeDepartamento>('Consulta de JefeDepartamento', null))
    );
}

/** PUT: update the docentes on the server */
update(jefeDepartamento: JefeDepartamento): Observable<any> {
  const url = `${this.baseUrl + 'api/JefeDepartamento'}/${jefeDepartamento.identificacion}`;
  return this.http.put(url, jefeDepartamento, httpOptions).pipe(
    tap(_ => this.handleErrorService.log(`updated jefeDepartamento identificacion=${jefeDepartamento.identificacion}`)),
    catchError(this.handleErrorService.handleError<any>('updateJefeDepartamento'))
  );
}

/** DELETE: delete the docentes from the server */
delete(jefeDepartamento: JefeDepartamento | string): Observable<JefeDepartamento> {
  const id = typeof jefeDepartamento === 'string' ? jefeDepartamento : jefeDepartamento.identificacion;
  const url = `${this.baseUrl + 'api/JefeDepartamento'}/${id}`;
  return this.http.delete<JefeDepartamento>(url, httpOptions).pipe(
    tap(_ => this.handleErrorService.log(`deleted JefeDepartamento identificacion=${id}`)),
    catchError(this.handleErrorService.handleError<JefeDepartamento>('deleteJefeDepartamento'))
  );
}

   //LOGIN
   setJefeDptoLoggedIn() {
    sessionStorage.setItem(
      "JefeDptoLoggedIn",
      JSON.stringify((this.isJefeDepartamentoLoggedIn = true))
    );
    this.isJefeDpto.next(true);
    /*
    this.isDocenteLoggedIn=true;
    this.username = 'Docente';*/
  }

  getJefeDptoLoggedIn(): boolean {
    if (JSON.parse(sessionStorage.getItem("JefeDptoLoggedIn")) != null) {
      this.isJefeDpto.next(JSON.parse(sessionStorage.getItem("JefeDptoLoggedIn")));
      return JSON.parse(sessionStorage.getItem("JefeDptoLoggedIn"));
    } else {
      this.isJefeDpto.next(false);
      return false;
    }
    /*
return this.isDocenteLoggedIn;
  }*/
  }
  getJefeDptoByUser(user: string): Observable<JefeDepartamento> {
    const url = `${this.baseUrl + 'api/JefeDepartamento'}/user=${user}`;
    return this.http.get<JefeDepartamento>(url).pipe(
      tap(_ => this.handleErrorService.log(`Consultado Jefe user=${user}`)),
      catchError(err =>{this.handleErrorService.log('usuario incorrecto');
      return of(undefined);
    })
    );
  }
 
  AddJefeDptoLS(jefeDpto: JefeDepartamento) {
    sessionStorage.setItem("administrador", JSON.stringify(jefeDpto));
  }

  getJefeDptoLS(): JefeDepartamento {
    return JSON.parse(sessionStorage.getItem("administrador"));
  }

  logoutJefeDpto() {
    this.isJefeDpto.next(false);
    sessionStorage.clear();
    
  }
  isAuthenticatedJefe(): boolean {
    return sessionStorage.getItem('administrador') != null;
  }
  //traer el nombre
  getUserName(): string {
    var administrador= JSON.parse(sessionStorage.getItem('administrador'));
    return administrador.user_Name;
  }
}
