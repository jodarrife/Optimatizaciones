import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TipoActividad } from '../../models/tipo-actividad';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TipoActividadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }
  /** POST: add a new TipoDeActividad to the server */
  addTipoActividad(tipoActividad: TipoActividad): Observable<TipoActividad> {
    return this.http.post<TipoActividad>(this.baseUrl + 'api/TipoActividad', tipoActividad, httpOptions).pipe(
      tap((newTipoActividad: TipoActividad) => this.log(`added NewTipoActividad w/ Codigo=${newTipoActividad.cod_TipoActividad}`)),
      catchError(this.handleError<TipoActividad>('addTipoActividad'))
    );
  }

  /** GET TipoDeActividad from the server */
  getAll(): Observable<TipoActividad[]> {
    return this.http.get<TipoActividad[]>(this.baseUrl + 'api/TipoActividad').pipe(
      tap(),
      catchError(this.handleError<TipoActividad[]>('getAll', []))
    );
  }
  

  /** GET TipoDeActividad by cod_Accion. Will 404 if id not found */
  get(cod_TipoActividad: number): Observable<TipoActividad> {
    const url = `${this.baseUrl + 'api/TipoActividad'}/${cod_TipoActividad}`;
    return this.http.get<TipoActividad>(url).pipe(
      tap(_ => this.log(`fetched Tipo Actividad cod_TipoActividad=${cod_TipoActividad}`)),
      catchError(this.handleError<TipoActividad>(`getTipoActividad cod_TipoActividad=${cod_TipoActividad}`))
    );
  }
  get2(cod_TipoActividad: number): Observable<TipoActividad> {
    
    return this.http.get<TipoActividad>(this.baseUrl+ 'api/TipoActividad').pipe(
      tap(_ => this.log(`fetched Tipo Actividad cod_TipoActividad=${cod_TipoActividad}`)),
      catchError(this.handleError<TipoActividad>(`getTipoActividad cod_TipoActividad=${cod_TipoActividad}`))
    );
  }

  /** PUT: update the TipoDeActividad on the server */
  update(tipoActividad: TipoActividad): Observable<any> {
    const url = `${this.baseUrl + 'api/TipoActividad'}/${tipoActividad.cod_TipoActividad}`;
    return this.http.put(url, tipoActividad, httpOptions).pipe(
      tap(_ => this.log(`updated Tipo  Actividad cod_TipoActividad=${tipoActividad.cod_TipoActividad}`)),
      catchError(this.handleError<any>('updateTipoActividad'))
    );
  }

  /** DELETE: delete the Acciones from the server */
  delete(tipoActividad: TipoActividad | number): Observable<TipoActividad> {
    const id = typeof tipoActividad === 'number' ? tipoActividad : tipoActividad.cod_TipoActividad;
    const url = `${this.baseUrl + 'api/TipoActividad'}/${id}`;
    return this.http.delete<TipoActividad>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Tipo Actividad cod_TipoActividad=${id}`)),
      catchError(this.handleError<TipoActividad>('deleteTipoActividad'))
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
    alert(`SERVIDOR: ${message}`);
  }
}
