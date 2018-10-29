import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Auth0Service } from 'ngx-auth0';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0Connection = environment.auth.connection;
  constructor(public auth0Service: Auth0Service) { }

  public login(user: any) {
    const { username, password } = user;
    console.log(user);
    return this.auth0Service
      .loginWithCredentials({username, password, connection: this.auth0Connection, realm: 'Username-Password-Authentication'});
  }
}
