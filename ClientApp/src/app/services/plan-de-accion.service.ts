
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PlanAccion } from '../models/plan-de-accion';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class PlanDeAccionService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }
}
