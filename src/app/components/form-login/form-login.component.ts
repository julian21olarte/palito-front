import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public user: any;
  private hide: boolean;
  constructor(public authService: AuthService, public router: Router) {
    this.hide = true;
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }


  public loginUser() {
    this.authService.login(this.user);
  }

}
