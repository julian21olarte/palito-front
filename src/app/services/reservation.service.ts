import { first, map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private api: string;
  private currentReservation: any;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.api = environment.api;
  }

  public getReservationByCode(code: string) {
    const url = this.api + 'reservation';
    return this.authService.getCurrentUser()
      .pipe(
          first(),
          map(currentUser => {
              const clientId = (currentUser.sub as string).split('|')[1];
              return {
                params: new HttpParams()
                  .append('code', code)
                  .append('client_id', clientId),
              };
          }),
          switchMap(options => this.http.get(url, options))
      );
  }


  public getCurrentReservation() {
    return this.currentReservation;
  }

  public setCurrentReservation(reservation: any = null) {
    this.currentReservation = reservation;
  }

  public deleteCurrentReservation() {
    this.setCurrentReservation(null);
  }
}
