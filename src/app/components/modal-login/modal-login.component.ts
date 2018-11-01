import { Router } from '@angular/router';
import { ModalService } from './../../services/modal.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  private modalId: string;
  @ViewChild('modalLogin') modal: any;
  constructor(
    private modalService: ModalService,
    private dialogRef: MatDialogRef<ModalLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router) {

  }

  ngOnInit() {
  }

  public openModal(isOpen: Boolean) {
  }

}
