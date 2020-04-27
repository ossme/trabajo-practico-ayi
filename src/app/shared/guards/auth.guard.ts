import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    console.log(localStorage.getItem('loggeado'));
    if(localStorage.getItem('loggeado')==="si"){
      return true
    }
    else{
      return false;
    }
     
    
  }
  
}
