import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
usersInfo : Array<Iusers> = [];
selectedUser !: Iusers;
userId !: number ;
  constructor(private _usersService:UsersService,
              private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.usersInfo = this._usersService.getAllUsers();
    this.selectedUser = this._usersService.usersArray[0]
  }


}
