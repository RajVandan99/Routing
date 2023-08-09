import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IuserRole, Iusers } from '../../model/users';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId !: number;
  selectedUser !: Iusers;
  constructor(private _userService:UsersService,
              private _route:ActivatedRoute,
              private _router:Router) { }

  ngOnInit(): void {
    this._route.params
        .subscribe((myParams:Params) => this.userId = +myParams['id'])
    this.selectedUser = this._userService.getSingleUser(this.userId);
    }
    onUpdateUserData(uername: HTMLInputElement, userrole:HTMLInputElement){
      let obj = {
        userName:uername.value,
        id: this.userId,
        userRole:userrole.value as IuserRole
      }
      this._userService.updateUser(obj);
      this._router.navigate(['users', this.userId])

    }
}
