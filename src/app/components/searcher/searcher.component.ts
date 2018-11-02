import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public reservationCode: string;
  private errorMessage: any;
  constructor(public reservationService: ReservationService, private router: Router) {
    this.reservationCode = '';
    this.errorMessage = {
      error: true,
      message: ''
    };
  }

  ngOnInit() {
  }

  public getReservation() {
    this.reservationService.getReservationByCode(this.reservationCode)
      .pipe(
        catchError(error => {
          return of(error);
        })
      )
      .subscribe(reservation => {
        if (reservation) {
          if (!reservation.ok && reservation.status === 404) {
            this.errorMessage.error = true;
            this.errorMessage.message = reservation.error.message;
          } else {
            this.reservationService.setCurrentReservation(reservation);
            this.router.navigate(['/payer']);
          }
        }
      });
  }

}
