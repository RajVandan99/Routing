import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
loggedInStatus: boolean = false;
  constructor(private _router:Router) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, _reject) => {
      setTimeout(()=> {
        if(localStorage.getItem("token")){
           this.loggedInStatus= true;
        }else{
          this.loggedInStatus = false;
        }
        resolve(this.loggedInStatus);
      }, 500)
    })
  }
  getloggedInstatus(): boolean{
    return this.loggedInStatus
  }
  loggedInTo(username:string, password:string){
  // {Username: "Rajvandan", password: "zaqZAQ!="} >> API call 
  if(username === "dhp@gmail.com" && password === "zaq1ZAQ!"){
    this.loggedInStatus = true;
    this._router.navigate(['/home']);
    localStorage.setItem("token", "JWT token");
    localStorage.setItem("userRole", "A");
  }else{
    alert("please enter valid email and password")

  }
  }
  logOutFrom(){
    this.loggedInStatus = false;
  }
}
