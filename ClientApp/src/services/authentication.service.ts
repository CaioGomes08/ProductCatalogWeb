import { Injectable } from "@angular/core";

import { environment } from 'src/environments/environment';
import { User } from "src/model/user.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<string> {
    return this.http.post<string>(`${environment.storeApi}/user/login`, user)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

}
