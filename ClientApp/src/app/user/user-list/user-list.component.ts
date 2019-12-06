import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User, UserViewModel } from 'src/model/user.model';
import { finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  usuarios: UserViewModel = new UserViewModel();

  showSpinner = false;

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.showSpinner = true;
    this.userService.getUsers()
      .pipe(finalize(() => this.showSpinner = false))
      .subscribe(res => {
        this.usuarios = res;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
        this.usuarios = null;
      });
  }

  editar(id) {
    console.log('Editar: ', id);
  }

  excluir(id) {
    console.log('Excluir: ', id);
  }
  
}
