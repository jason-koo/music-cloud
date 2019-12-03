import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //loginUserData = {}
  constructor(private _authService: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  loginUser(form:NgForm) {
    if(form.value.email == "admin@gmail.com") {
      this._authService.loginNewUser(form.value).subscribe(
        res => {
          console.log(res)
          localStorage.setItem('adminToken', res.token);
          this._router.navigate(['/api/admin/home']);
        }
      )
    } else {
      this._authService.loginNewUser(form.value).subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this._router.navigate(['/api/authUser']);
        },
        err => alert(err.error)
      )
    }
    
  }

}
