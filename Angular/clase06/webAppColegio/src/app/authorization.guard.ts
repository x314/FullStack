import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from "app/auth.service";

@Injectable()
export class AuthorizationGuard implements CanActivate, CanActivateChild {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(private auth: AuthService) {}

  canActivate(): boolean {
    const rol: string = this.auth.rolUsuario()
    return rol == 'admin' ? true : false
  }

  canActivateChild(): boolean {
    return this.canActivate()
  }
}
