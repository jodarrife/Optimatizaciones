import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Acciones } from '../../models/acciones';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AccionesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }
  /** POST: add a new Acciones to the server */
  addAcciones(acciones: Acciones): Observable<Acciones> {
    return this.http.post<Acciones>(this.baseUrl + 'api/Acciones', acciones, httpOptions).pipe(
      tap((newAcciones: Acciones) => this.log(`added NewAcciones w/ Codigo=${newAcciones.cod_Accion}`)),
      catchError(this.handleError<Acciones>('addAcciones'))
    );
  }

  /** GET Acciones from the server */
  getAll(): Observable<Acciones[]> {
    return this.http.get<Acciones[]>(this.baseUrl + 'api/Acciones').pipe(
      tap(),
      catchError(this.handleError<Acciones[]>('getAll', []))
    );
  }

  /** GET Acciones by cod_Accion. Will 404 if id not found */
  get(cod_Accion: number): Observable<Acciones> {
    const url = `${this.baseUrl + 'api/Acciones'}/${cod_Accion}`;
    return this.http.get<Acciones>(url).pipe(
      tap(_ => this.log(`fetched Acciones cod_Accion=${cod_Accion}`)),
      catchError(this.handleError<Acciones>(`getAcciones cod_Accion=${cod_Accion}`))
    );
  }

  /** PUT: update the Acciones on the server */
  update(acciones: Acciones): Observable<any> {
    const url = `${this.baseUrl + 'api/Acciones'}/${acciones.cod_Accion}`;
    return this.http.put(url, acciones, httpOptions).pipe(
      tap(_ => this.log(`updated acciones cod_Accion=${acciones.cod_Accion}`)),
      catchError(this.handleError<any>('updateDocentes'))
    );
  }

  /** DELETE: delete the Acciones from the server */
  delete(acciones: Acciones | number): Observable<Acciones> {
    const id = typeof acciones === 'number' ? acciones : acciones.cod_Accion;
    const url = `${this.baseUrl + 'api/Acciones'}/${id}`;
    return this.http.delete<Acciones>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted acciones cod_Accion=${id}`)),
      catchError(this.handleError<Acciones>('deleteAcciones'))
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
