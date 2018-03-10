import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }

  constructor(private auth: AuthService) {
    
  }

  canActivate(): boolean {
    return this.auth.estaAutenticado();
  }

  canActivateChild(): boolean {
    return this.auth.estaAutenticado();
  }
}
