import { Component } from '@angular/core';
import { AuthServiceService } from './shared/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Routing_Practice';
  constructor(
    private _authService:AuthServiceService,
    private _router:Router){
  }
  // logInTo(){
  //   this._authService.loggedInTo();
  // }
  logOut(){
    this._router.navigate(['/']);
    this._authService.logOutFrom();
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
  }
}
