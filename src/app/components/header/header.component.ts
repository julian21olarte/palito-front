import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private currentUser: any;
  @ViewChild('modalLogin') modalLogin: any;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }


  public openLoginModal(modalId: String) {
    this.modalService.openModal(modalId);
  }

}
