import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  userRole !:string;
  constructor(private _route:ActivatedRoute){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     this.userRole =route.data['userRole'];
     if(this.userRole.includes(localStorage.getItem("userRole")!)){
       return true;
     }else{
      return false;
     }
    
  }
  
}
