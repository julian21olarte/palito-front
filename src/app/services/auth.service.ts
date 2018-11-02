import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as Auth0 from 'auth0-js';
import { of, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0Connection = environment.auth.connection;
  private currentUser: any;
  private currentUserObservable: BehaviorSubject<any>;
  private auth0Service: any;
  constructor(public router: Router) {

    // Auth0 config
    this.auth0Service = new Auth0.WebAuth({
      domain: environment.auth.WebAuthConfig.domain,
      clientID: environment.auth.WebAuthConfig.clientID,
      responseType: environment.auth.WebAuthConfig.responseType,
      scope: environment.auth.WebAuthConfig.scope,
      redirectUri: window.location.origin
    });
    this.currentUserObservable = new BehaviorSubject(this.currentUser);
    this.getAccessToken();
  }

  public login(user: any, cb: any) {
    const { username, password } = user;
    this.auth0Service
      .login({username, password, realm: this.auth0Connection}, cb);
  }

  public logout() {
    this.auth0Service.logout({
      returnTo: window.location.origin,
      clientID: environment.auth.WebAuthConfig.clientID,
    });
    this.setCurrentUser(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  getAccessToken() {
    const accesToken = localStorage.getItem('access_token');
    const expires_at = localStorage.getItem('expires_at');
    const profile = localStorage.getItem('currentUser');

    if (accesToken && profile && expires_at && parseInt(expires_at, 10) >= (new Date()).getTime()) {
      this.setCurrentUser(JSON.parse(profile));
    } else {
      this.auth0Service.checkSession({}, (err, authResult) => {
        if (err) {
        } else if (authResult && authResult.accessToken && authResult.idToken) {
          this.getUserInfo(authResult);
        }
      });
    }
  }
  private getUserInfo(authResult: any) {
    this.auth0Service.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this.setCurrentUser(profile);
        this.setSession(authResult, profile);
      }
    });
  }

  private setSession(authResult, profile): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('currentUser', JSON.stringify(profile));
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public getCurrentUser() {
    return this.currentUserObservable.asObservable();
  }

  public setCurrentUser(user: any) {
    this.currentUserObservable.next(user);
  }

  public getAuthHeaders() {
    return new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('access_token')}`);
  }
}
