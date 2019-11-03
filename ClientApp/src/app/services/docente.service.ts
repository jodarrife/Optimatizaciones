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
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  /** POST: add a new task to the server */
  addDocente(docentes: Docente): Observable<Docente> {
    return this.http.post<Docente>(this.baseUrl + 'api/Docente', docentes, httpOptions).pipe(
      tap((newDocente: Docente) => this.log(`added NewDocente w/ id=${newDocente.Identificacion}`)),
      catchError(this.handleError<Docente>('addDocente'))
    );
  }

  /** GET Task from the server */
  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(this.baseUrl + 'api/Docente').pipe(
      tap(_ => this.log('Se Consulta la información')),
      catchError(this.handleError<Docente[]>('getAll', []))
    );
  }

  /** GET task by id. Will 404 if id not found */
  get(Identificacion: number): Observable<Docente> {
    const url = `${this.baseUrl + 'api/Docente'}/${Identificacion}`;
    return this.http.get<Docente>(url).pipe(
      tap(_ => this.log(`fetched Docente id=${Identificacion}`)),
      catchError(this.handleError<Docente>(`getDocente id=${Identificacion}`))
    );
  }

  /** PUT: update the Task on the server */
  update(docentes: Docente): Observable<any> {
    const url = `${this.baseUrl + 'api/Docente'}/${docentes.Identificacion}`;
    return this.http.put(url, docentes, httpOptions).pipe(
      tap(_ => this.log(`updated docentes id=${docentes.Identificacion}`)),
      catchError(this.handleError<any>('docentes'))
    );
  }

  /** DELETE: delete the task from the server */
  delete(docentes: Docente | number): Observable<Docente> {
    const id = typeof docentes === 'number' ? docentes : docentes.Identificacion;
    const url = `${this.baseUrl + 'api/Docente'}/${id}`;
    return this.http.delete<Docente>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted docentes id=${id}`)),
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
