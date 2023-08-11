import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from "./auth-service.service";

@Injectable({
    providedIn: "root"
})

export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private _authService:AuthServiceService,
                private _router:Router){

    }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean> {
return this._authService.isAuthenticated()
            .then((isAuth:boolean) => {
            if(isAuth === true){
                return true;
            }else{
                return this._router.navigate(["/"])
            }
        })

}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  | Observable<boolean> | Promise<boolean> {
    //   return  this._authService.isAuthenticated()
    //         .then((isAuth:boolean) => {
    //             if(isAuth){
    //                 return true
    //             }else{
    //                return this._router.navigate(['/'])
    //             }
    //         })
    return this.canActivate(childRoute, state);
    }
}