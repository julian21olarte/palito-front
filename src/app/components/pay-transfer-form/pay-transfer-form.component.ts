import { PayTransfer } from './../../interfaces/pay-transfer.interface';
import { Pay } from './../../interfaces/pay.interface';
import { Component, OnInit, Input } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation.interface';

@Component({
  selector: 'app-pay-transfer-form',
  templateUrl: './pay-transfer-form.component.html',
  styleUrls: ['./pay-transfer-form.component.scss']
})
export class PayTransferFormComponent implements OnInit {

  @Input() reservation: Reservation;
  private pay: PayTransfer;
  constructor() {
  }

  ngOnInit() {
    this.pay = {
      bank_name: '',
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
      type: 'Transferencia Bancaria',
      voucher_number: '',
      observations: '',
      transfer_total: this.reservation.total
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
