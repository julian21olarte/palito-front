import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/interfaces/reservation.interface';

@Component({
  selector: 'app-payer',
  templateUrl: './payer.component.html',
  styleUrls: ['./payer.component.scss']
})
export class PayerComponent implements OnInit {

  public reservation: Reservation;
  public pay: any;
  constructor(private reservationService: ReservationService, private router: Router) {
    this.reservation = this.reservationService.getCurrentReservation();
    if (!this.reservation) {
      this.router.navigate(['/search']);
    }
  }

  ngOnInit() {
  }

}
