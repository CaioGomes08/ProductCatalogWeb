import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { AuthenticationService } from 'src/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  invalidLogin: boolean;

  ngOnInit() {
  }

  // tslint:disable-next-line: member-ordering
  user: User = new User();

  logar() {
    this.authService.login(this.user)
        .subscribe(response => {
          const token = response['token'];
          localStorage.setItem('token', token);
          this.invalidLogin = false;
          this.router.navigate(['/home']);
        }, err => {
          this.invalidLogin = true;
        });
  }

  logout(){
    localStorage.removeItem('token');
  }
}
