import { ModalService } from './../../services/modal.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  private modalId: String;
  @ViewChild('modalLogin') modal: any;
  constructor(private modalService: ModalService) {
    this.modalId = 'modalLogin';
    this.modalService.registerModal(this.modalId)
      .subscribe((isOpen: Boolean) => this.openModal(isOpen));
  }

  ngOnInit() {
  }

  public openModal(isOpen: Boolean) {
    isOpen ? this.modal.show() : this.modal.close();
  }

}
