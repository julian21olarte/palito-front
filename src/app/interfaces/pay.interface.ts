export interface Pay {
  description: string;

  code: string;
  intermediary_provider_id: string;
  provider_id: string;

  type: string;
  reservation_channel: string;
  reservation_date: Date;
  pay_date: Date;
  total: number;
  client_id: string;
  provider_name: string;
  travel_date: Date;
  bank_name: string;
  observations: string;
}
