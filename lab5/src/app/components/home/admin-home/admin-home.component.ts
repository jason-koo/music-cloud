import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ShowUsersService } from '../../../services/show-users.service';
import { User } from '../../../models/user';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  
  constructor(private _authService:AuthService, private _showUsersService:ShowUsersService) { }

  ngOnInit() {
    this.showAllUsers();
  }

  showAllUsers() {
    this._showUsersService.getUsers().subscribe((res) => {
      this._showUsersService.users = res as User[];
    })
  }

  makeUserAdmin(_id:string) {
    this._authService.giveAdminPriv(_id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
