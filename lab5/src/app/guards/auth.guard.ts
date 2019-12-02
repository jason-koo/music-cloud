import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, fromEventPattern } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { truncate } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private _authService:AuthService, private _route:Router) {}
  
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this._route.navigate(['/api/open/login'])
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
