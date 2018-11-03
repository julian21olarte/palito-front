import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public user: any;
  public hide: boolean;
  public errorMessage: any;
  constructor(public authService: AuthService, public router: Router, public progressService: ProgressService) {
    this.errorMessage = {
      error: false,
      message: 'Nombre de usuario o contraseña invalidos.'
    };
    this.hide = true;
    this.user = {
      username: '',
      password: ''
    };
  }

  ngOnInit() {
  }


  public loginUser() {
    this.progressService.showProgressBar();
    this.authService.login(this.user, (err, response) => {
      this.progressService.hideProgressBar();
      if (err) {
        this.errorMessage.error = true;
      } else {
        this.errorMessage.error = false;
      }
    });
  }

}
