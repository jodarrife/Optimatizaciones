import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DocenteService } from '../../services/docente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDocenteGuard implements CanActivate {
  constructor( private docenteService:DocenteService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.docenteService.getDocenteLoggedIn()==false){
    this.router.navigate(["/"]);
    }else{
      return this.docenteService.getDocenteLoggedIn();
    }
    
  }
  
}
