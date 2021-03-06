import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
    this.authService.getCurrentUser()
      .subscribe(user => {
        if (user) {
          this.router.navigate(['/search']);
        }
      });
  }

  ngOnInit() {
  }

}
