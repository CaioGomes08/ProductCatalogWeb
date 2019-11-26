import { Injectable, EventEmitter } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtHelper: JwtHelperService, private router: Router) { }

  usuarioLogado = new EventEmitter<boolean>();

  canActivate() {
    const token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      this.usuarioLogado.emit(true);
      return true;
    }
    this.usuarioLogado.emit(false);
    this.router.navigate(['/']);
    return false;
  }
}
