import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ModalLoginComponent } from '../modal-login/modal-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser: any;
  @ViewChild('modalLogin') modalLogin: any;
  constructor(private modalService: ModalService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe(user => {
        console.log(this.currentUser);
        this.currentUser = user;
      });
  }


  public openLoginModal() {
    this.modalService.openModal(ModalLoginComponent);
  }

  public logout() {
    this.authService.logout();
  }

}
