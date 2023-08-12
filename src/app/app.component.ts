import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './shared/services/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Routing_Practice';
  userRole !:string | null;
  constructor(
    private _authService:AuthServiceService,
    private _router:Router){
  }
  ngOnInit(): void {
    // this.userRole = this._route.snapshot.data['userRole'];
    this.userRole = localStorage.getItem("userRole")!
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
