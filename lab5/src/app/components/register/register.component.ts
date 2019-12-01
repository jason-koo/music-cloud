import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private auth: AuthService, private _router:Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.auth.registerUser(this.registerUserData).subscribe(
      res => this._router.navigate(['/api/open/login']),
      err => alert(err.error)
    )
    
  }

}
