import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
usersArray: Array<Iusers> = [
  { userName: "John",
    id : 1,
    userRole: "admin"
  },
  { userName: "Jhen",
  id : 2,
  userRole: "user"
  },
  { userName: "July",
  id : 3,
  userRole: "admin"
  }
]
  constructor() { }

  getAllUsers() : Array<Iusers>{
    return this.usersArray;
  }
  getSingleUser(id:number):Iusers{
    return this.usersArray.find(user => user.id === id)!
  }
  updateUser(userObj:Iusers){
  return this.usersArray.forEach(obj => {
   if(obj.id === userObj.id){
    obj.userName = userObj.userName;
    obj.userRole = userObj.userRole;
    obj.id = userObj.id;
   }
  }) 
  }
}
