import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../services/ahth.guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
signInStatus :boolean = false;
isPassword :boolean = false
  constructor(private _authService:AuthServiceService,
              private _router:Router,
              private _authGuard:AuthGuard) { }

  ngOnInit(): void {
  
  }
  logInto(username:HTMLInputElement, password:HTMLInputElement){
    this._authService.loggedInTo(username.value, password.value);
  // this._router.navigate(['/home'])
  }

}
