import { environment } from '../../environments/environment';
import { Pay } from '../interfaces/pay.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  private api: string;
  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  public payReservation(pay: Pay) {
    pay.pay_date = moment(pay.pay_date).format('YYYY-MM-DD');
    pay.reservation_date = moment(pay.reservation_date).format('YYYY-MM-DD');
    pay.travel_date = moment(pay.travel_date).format('YYYY-MM-DD');
    const url = this.api + 'pay';
    return this.http.post(url, {pay: pay});
  }
}
