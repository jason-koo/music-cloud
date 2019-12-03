import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor(private auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginNewUser(this.loginUserData).subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          this._router.navigate(['/api/authUser']);
        },
        err => alert(err.error)
      )
  }

}
