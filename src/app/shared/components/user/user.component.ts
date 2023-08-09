import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IuserRole, Iusers } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId !: number;
userInfo !: Iusers;
userrole!: IuserRole;
  constructor(private _route:ActivatedRoute,
              private _usersService:UsersService,
              private _router:Router) { }

  ngOnInit(): void {
    // this.userId = +this._route.snapshot.params['id'];
    this._route.params
        .subscribe((myParams:Params) => this.userId = +myParams['id'])
    // console.log(this.userId);
    this.userInfo = this._usersService.getSingleUser(this.userId);
    // console.log(this.userInfo);
  }
  goToEditUser(){
    this._router.navigate(['edit'],{relativeTo:this._route})
        
  }
}
