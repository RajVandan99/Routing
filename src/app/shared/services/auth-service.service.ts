import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
loggedInStatus: boolean = false;
  constructor() { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve(this.loggedInStatus)
      }, 500)
    })
  }
  getloggedInstatus(): boolean{
    return this.loggedInStatus
  }
  loggedInTo(){
  // {Username: "Rajvandan", password: "zaqZAQ!="} >> API call 
    this.loggedInStatus = true;
  }
  logOutFrom(){
    this.loggedInStatus = false;
  }
}
