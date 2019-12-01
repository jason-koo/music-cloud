import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  constructor(private _http:HttpService, private _authSerivce:AuthService) { }

  ngOnInit() {
    this._http.getAuthUserPage().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
