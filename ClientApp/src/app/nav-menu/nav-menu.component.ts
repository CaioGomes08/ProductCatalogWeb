import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  userLogged = false;
  constructor(private router: Router, private authGuardService: AuthGuard) { }

  collapse() {
    this.isExpanded = false;
  }

  ngOnInit() {
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
    this.router.navigate(['/']);
  }
}
