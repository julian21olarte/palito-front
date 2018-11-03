import { ProgressService } from './../../services/progress.service';
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
  public errorMessage: any;
  constructor(public reservationService: ReservationService, private router: Router, public progressService: ProgressService) {
    this.reservationCode = '';
    this.errorMessage = {
      error: true,
      message: ''
    };
  }

  ngOnInit() {
  }

  public getReservation() {
    this.progressService.showProgressBar();
    this.reservationService.getReservationByCode(this.reservationCode)
      .pipe(
        catchError(error => {
          return of(error);
        })
      )
      .subscribe(reservation => {
        this.progressService.hideProgressBar();
        if (reservation) {
          if (!reservation.ok && reservation.status === 404) {
            this.errorMessage.error = true;
            this.errorMessage.message = 'No se encontra ningun pedido con el codigo: ' + this.reservationCode;
          } else {
            this.reservationService.setCurrentReservation(reservation);
            this.router.navigate(['/payer']);
          }
        }
      });
  }

}
