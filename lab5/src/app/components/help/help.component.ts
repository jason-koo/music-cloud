import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private _authService:AuthService, private _route:Router) { }

  ngOnInit() {
  }

  reportCopyright() {
    this._route.navigate(['/api/open/reportCopyright'])
  }

}
