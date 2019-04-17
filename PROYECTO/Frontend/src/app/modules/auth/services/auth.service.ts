import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { LoginRequest, LoginResponse } from '../../../shared/models/auth.models';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  login({ email, password, role }: LoginRequest) {
    return this.http
      .post<LoginResponse>(`${environment.apiBaseUrl}/account/login`, {
        email,
        password,
        role
      })
      .pipe(
        map(user => {
          if (user && user.accessToken) {
            const { accessToken } = user;
            localStorage.setItem(
              'auth',
              JSON.stringify({ accessToken })
            );
          }
          return user;
        })
      );
  }

  register({ email, password, role }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      email,
      password,
      role
    });
  }

  logout() {
    localStorage.removeItem('auth');
  }

}