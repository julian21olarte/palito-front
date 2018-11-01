import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation.interface';

@Component({
  selector: 'app-pay-detail',
  templateUrl: './pay-detail.component.html',
  styleUrls: ['./pay-detail.component.scss']
})
export class PayDetailComponent implements OnInit {

  @Input() reservation: Reservation;
  constructor() {
  }

  ngOnInit() {
    console.log(this.reservation);
  }

}
