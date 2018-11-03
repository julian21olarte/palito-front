import { ProgressService } from './../../services/progress.service';
import { PayService } from './../../services/pay.service';
import { Subject } from 'rxjs';
import { PayCard } from './../../interfaces/pay-card.interface';
import { Pay } from './../../interfaces/pay.interface';
import { Reservation } from './../../interfaces/reservation.interface';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-card-form',
  templateUrl: './pay-card-form.component.html',
  styleUrls: ['./pay-card-form.component.scss']
})
export class PayCardFormComponent implements OnInit {

  @Input() reservation: Reservation;
  public pay: PayCard;
  public hide: boolean;
  public hideCCV: boolean;
  public conditions: boolean;
  constructor(private payService: PayService, private router: Router, public progressService: ProgressService) {
    this.hide = this.hideCCV = true;
    this.conditions = false;
  }

  ngOnInit() {
    this.pay = {
      bank_name: '',
      card_number: '',
      card_type: '',
      reservation_id: this.reservation._id,
      client_id: this.reservation.client_id,
      code: this.reservation.code,
      description: '',
      subject: '',
      intermediary_provider_id: this.reservation.intermediary_provider_id,
      pay_date: new Date(),
      provider_id: this.reservation.provider_id,
      provider_name: this.reservation.provider_name,
      reservation_channel: this.reservation.reservation_channel,
      reservation_date: this.reservation.reservation_date,
      total: this.reservation.total,
      travel_date: this.reservation.travel_date,
      type: 'Tarjeta Debito/Credito',
      card_franchise: '',
      ccv_code: '',
      expired_date: '',
      client_name: '',
      client_document: '',
      observations: ''
    };
  }

  public sendPay() {
    this.progressService.showProgressBar();
    this.pay.pay_date = new Date();
    this.pay.description =
    `La siguiente reserva fue pagada y requiere que procese el pago con tarjeta.
      Para consultar información de la reserva puede utilizar:
      * Identificador de reserva interno: ${this.pay.code}
      * Localizador GDS: ${this.pay.intermediary_provider_id}
      * PNR: ${this.pay.provider_id}`;
    this.pay.subject = `PAGO - TOTAL (${this.pay.intermediary_provider_id})`;
    this.pay.card_number = `Tarjeta ${this.pay.card_type} - ${this.pay.card_franchise} - ${this.pay.card_number} ${this.pay.ccv_code}`;
    console.log(this.pay);
    this.payService.payReservation(this.pay)
      .subscribe(resp => {
        if (resp) {
          console.log(resp);
          this.progressService.hideProgressBar();
          this.router.navigate(['/success']);
        }
      });
  }

}
