import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Docente } from '../models/docente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DocenteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl:string) {
  }

  /** POST: add a new docente to the server */
  addDocente(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docente, httpOptions).pipe(
      tap((newDocente: Docente) => this.log(`added NewDocente w/ Identificacion=${newDocente.identificacion}`)),
      catchError(this.handleError<Docente>('addDocente'))
    );
  }

  /** GET Docente from the server */
  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/Docente').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Docente[]>('getAll', []))
    );
  }

  /** GET Docente by Identificacion. Will 404 if id not found */
  get(identificacion: number): Observable<Docente> {
    const url = `${this.baseUrl + 'api/Docente'}/${identificacion}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.log(`fetched Docente Identificacion=${identificacion}`)),
      catchError(this.handleError<Docente>(`getDocente Identificacion=${identificacion}`))
    );
  }

  /** PUT: update the docentes on the server */
  update(docentes: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/Docente'}/${docentes.identificacion}`;
    return this.http.put(url, docentes, httpOptions).pipe(
      tap(_ => this.log(`updated docentes identificacion=${docentes.identificacion}`)),
      catchError(this.handleError<any>('updateDocentes'))
    );
  }

  /** DELETE: delete the docentes from the server */
  delete(docentes: Docente | string): Observable<Docente> {
    const id = typeof docentes === 'string' ? docentes : docentes.identificacion;
    const url = `${this.baseUrl + 'api/Docente'}/${id}`;
    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted docentes identificacion=${id}`)),
      catchError(this.handleError<Docente>('deleteDocente'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`DocenteService: ${message}`);
  }

}
