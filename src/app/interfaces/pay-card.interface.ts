import { Pay } from './pay.interface';
export interface PayCard extends Pay {
  card_type: string; // numero de tarjeta
  card_franchise: string; // franquicia
  card_number: string; // numero de tarjeta
  ccv_code: string; // codigo CCV
  expired_date: string; // fecha de expiracion de la tarjeta
  travel_date: Date;

  client_name: string;
  client_document: string;
}
