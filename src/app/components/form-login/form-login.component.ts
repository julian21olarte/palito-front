import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public user: any;
  constructor(public authService: AuthService) {
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }


  public loginUser() {
    this.authService.login(this.user)
      .subscribe(response => console.log(response));
  }

}
