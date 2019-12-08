import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JefeDepartamentoService } from '../../services/jefe-departamento.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor( private jefeService:JefeDepartamentoService, private router:Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.jefeService.getJefeDptoLoggedIn()==false){
    this.router.navigate(["/"]);
    }
    return this.jefeService.getJefeDptoLoggedIn();
    return
  }
  
}
