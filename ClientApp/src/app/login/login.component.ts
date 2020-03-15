import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService) { }

  invalidLogin: boolean;

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/home']);
    }
  }

  // tslint:disable-next-line: member-ordering
  user: User = new User();

  logar() {
    this.authService.login(this.user)
      .subscribe(response => {
        const token = response['token'];
        const usuario = response['usuario'];

        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));

        this.invalidLogin = false;
        this.router.navigate(['/home']);
      }, (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.toastr.error('Usuário e/ou senha inválidos', 'Erro ao logar', { progressBar: true });
        }
        this.invalidLogin = true;
      });
  }
}
