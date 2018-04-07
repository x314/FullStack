import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AutenticacionService } from "./autenticacion.service";

@Injectable()
export class AutenticacionGuard implements CanActivate, CanLoad {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(private auth: AutenticacionService) {}

  // ruta especifica
  canActivate(): boolean {
    return this.auth.autenticado
  }

  // todas las rutas
  canLoad(): boolean {
    return this.auth.autenticado
  }
}
