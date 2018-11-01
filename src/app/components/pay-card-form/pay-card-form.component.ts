import { PayCard } from './../../interfaces/pay-card.interface';
import { Pay } from './../../interfaces/pay.interface';
import { Reservation } from './../../interfaces/reservation.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pay-card-form',
  templateUrl: './pay-card-form.component.html',
  styleUrls: ['./pay-card-form.component.scss']
})
export class PayCardFormComponent implements OnInit {

  @Input() reservation: Reservation;
  private pay: PayCard;
  private hide: boolean;
  private hideCCV: boolean;
  constructor() {
    console.log(this.reservation);
    this.hide = this.hideCCV = true;
  }

  ngOnInit() {
    this.pay = {
      bank_name: '',
      card_number: '',
      card_type: '',
      client_id: this.reservation.client_id,
      code: this.reservation.code,
      description: '',
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
    this.pay.pay_date = new Date();
    this.pay.description =
    `La siguiente reserva fue pagada y
      requiere que procese el pago con
      tarjeta.
      Para consultar información de la
      reserva puede utilizar:
      * Identificador de reserva
      interno: ${this.pay.code}
      * Localizador GDS: ${this.pay.intermediary_provider_id}
      * PNR: ${this.pay.provider_id}`;

    console.log(this.pay);
  }

}
