import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  userLogged = false;
  usuario: User = new User();
  constructor(private router: Router, private authGuardService: AuthGuard) { }

  collapse() {
    this.isExpanded = false;
  }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.authGuardService.usuarioLogado
      .subscribe(value => {
        this.userLogged = value;
      });
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    this.authGuardService.usuarioLogado.emit(false);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
