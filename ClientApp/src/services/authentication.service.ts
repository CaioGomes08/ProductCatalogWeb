import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';
import { Http } from "@angular/http";
import { User } from "src/model/user.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: Http) { }

  public login(user: User): Observable<string> {
    return this.http.post(`${environment.storeApi}/user/login`, user)
      .pipe(
        map(response => {
          return response.json();
        })
      );
  }

}
