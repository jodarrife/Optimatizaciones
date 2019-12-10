import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../../models/docente';
import { HandleErrorService } from '../../Componentes/Errores/@base/services/handle-error.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DocenteService {

  private isDocenteLoggedIn;
  public username;
  baseUrl: string;
  isDocente = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleErrorService,
  ) {
    this.isDocenteLoggedIn = false;
    this.baseUrl = baseUrl;
  }

  /** POST: add a new docente to the server */
  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente, httpOptions).pipe(
      tap((newDocente: Docente) => this.handleErrorService.log(`added NewDocente w/ Identificacion=${newDocente.identificacion}`)),
      catchError(this.handleErrorService.handleError<Docente>('addDocente'))
    );
  }

  /** GET Docente from the server */
  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/Docente').pipe(
      tap(_ => this.handleErrorService.log('datos enviados')),
      catchError(this.handleErrorService.handleError<Docente[]>('Consulta Docente', null))
    );

  }

  /** GET Docente by Identificacion. Will 404 if id not found */
  get(identificacion: number): Observable<Docente> {
    const url = `${this.baseUrl + 'api/Docente'}/${identificacion}`;
    return this.http.get<Docente>(url)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Docente>('Consulta de Docente', null))
      );
  }

  /** PUT: update the docentes on the server */
  update(docentes: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/Docente'}/${docentes.identificacion}`;
    return this.http.put(url, docentes, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`updated docentes identificacion=${docentes.identificacion}`)),
      catchError(this.handleErrorService.handleError<any>('updateDocentes'))
    );
  }

  /** DELETE: delete the docentes from the server */
  delete(docentes: Docente | string): Observable<Docente> {
    const id = typeof docentes === 'string' ? docentes : docentes.identificacion;
    const url = `${this.baseUrl + 'api/Docente'}/${id}`;
    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.handleErrorService.log(`deleted docentes identificacion=${id}`)),
      catchError(this.handleErrorService.handleError<Docente>('deleteDocente'))
    );
  }

  /*
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    /** Log a HeroService message with the MessageService */
  /*private log(message: string) {
    alert(`SERVIDOR: ${message}`);
  }*/



  //LOGIN
  setDocenteLoggedIn() {
    sessionStorage.setItem(
      "DocenteLoggedIn",
      JSON.stringify((this.isDocenteLoggedIn = true))
    );
    this.isDocente.next(true);
    /*
    this.isDocenteLoggedIn=true;
    this.username = 'Docente';*/
  }

  getDocenteLoggedIn(): boolean {
    if (JSON.parse(sessionStorage.getItem("DocenteLoggedIn")) != null) {
      this.isDocente.next(JSON.parse(sessionStorage.getItem("DocenteLoggedIn")));
      return JSON.parse(sessionStorage.getItem("DocenteLoggedIn"));
    } else {
      this.isDocente.next(false);
      return false;
    }
    /*
return this.isDocenteLoggedIn;
  }*/
  }
  getDocenteByUser(user: string): Observable<Docente> {
    const url = `${this.baseUrl + 'api/Docente'}/user=${user}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.handleErrorService.log(`Consultado docente user=${user}`)),
      catchError(err =>{this.handleErrorService.log('usuario incorrecto');
      return of(undefined);
    })
    );
  }
 
  AddDocenteLS(docente: Docente) {
    sessionStorage.setItem("docente", JSON.stringify(docente));
  }

  getDocenteLS(): Docente {
    return JSON.parse(sessionStorage.getItem("docente"));
  }

  logoutDocente() {
    this.isDocente.next(false);
    sessionStorage.clear();
    
  }
  isAuthenticatedDocente(): boolean {
    return sessionStorage.getItem('docente') != null;
  }
    //traer el nombre
    getUserName(): string {
      var docente= JSON.parse(sessionStorage.getItem('docente'));
      return docente.user_Name;
    }
}

