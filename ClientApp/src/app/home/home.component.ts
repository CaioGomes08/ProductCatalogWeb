import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{

  usuario: User = new User();

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
  }
}
