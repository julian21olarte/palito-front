import { MatDialog } from '@angular/material';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(public dialog: MatDialog) {
  }

  public openModal(modalComponent: any, data: any = null) {
    const dialogRef = this.dialog.open(modalComponent, {
      width: '60vw',
      height: '50vh',
      disableClose: true,
      hasBackdrop: true,
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
