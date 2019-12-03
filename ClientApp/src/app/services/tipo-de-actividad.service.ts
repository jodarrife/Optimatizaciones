import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TipoDeActividad } from '../models/tipo-de-actividad';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TipoDeActividadService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }
  /** POST: add a new TipoDeActividad to the server */
  addTipoDeActividad(tipoDeActividad: TipoDeActividad): Observable<TipoDeActividad> {
    return this.http.post<TipoDeActividad>(this.baseUrl + 'api/TipoDeActividad', tipoDeActividad, httpOptions).pipe(
      tap((newTipoDeActividad: TipoDeActividad) => this.log(`added newTipoDeActividad w/ Codigo=${newTipoDeActividad.cod_TipoActividad}`)),
      catchError(this.handleError<TipoDeActividad>('addTipoDeActividad'))
    );
  }

  /** GET Acciones from the server */
  getAll(): Observable<TipoDeActividad[]> {
    return this.http.get<TipoDeActividad[]>(this.baseUrl + 'api/TipoDeActividad').pipe(
      tap(),
      catchError(this.handleError<TipoDeActividad[]>('getAll', []))
    );
  }

  /** GET Acciones by cod_Accion. Will 404 if id not found */
  get(cod_TipoActividad: number): Observable<TipoDeActividad> {
    const url = `${this.baseUrl + 'api/TipoDeActividad'}/${cod_TipoActividad}`;
    return this.http.get<TipoDeActividad>(url).pipe(
      tap(_ => this.log(`fetched Tipo De Actividad cod_TipoActividad=${cod_TipoActividad}`)),
      catchError(this.handleError<TipoDeActividad>(`getTipoDeActividad cod_TipoActividad=${cod_TipoActividad}`))
    );
  }

  /** PUT: update the Acciones on the server */
  update(tipoDeActividad: TipoDeActividad): Observable<any> {
    const url = `${this.baseUrl + 'api/TipoDeActividad'}/${tipoDeActividad.cod_TipoActividad}`;
    return this.http.put(url, tipoDeActividad, httpOptions).pipe(
      tap(_ => this.log(`updated acciones cod_TipoActividad=${tipoDeActividad.cod_TipoActividad}`)),
      catchError(this.handleError<any>('updateTipoDeActividad'))
    );
  }

  /** DELETE: delete the Acciones from the server */
  delete(tipoDeActividad: TipoDeActividad | number): Observable<TipoDeActividad> {
    const id = typeof tipoDeActividad === 'number' ? tipoDeActividad : tipoDeActividad.cod_TipoActividad;
    const url = `${this.baseUrl + 'api/TipoDeActividad'}/${id}`;
    return this.http.delete<TipoDeActividad>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Tipo Actividad cod_TipoActividad=${id}`)),
      catchError(this.handleError<TipoDeActividad>('deleteTipoDeActividad'))
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
}
