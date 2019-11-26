import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './guards/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userLogged = false;

  constructor(private authGuardService: AuthGuard) { }

  ngOnInit() {
    this.authGuardService.usuarioLogado
      .subscribe(value => {
        this.userLogged = value;
      });
  }
}
