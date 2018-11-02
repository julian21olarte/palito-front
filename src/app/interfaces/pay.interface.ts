export interface Pay {
  description: string;
  subject: string;
  code: string;
  intermediary_provider_id: string;
  provider_id: string;

  type: string;
  reservation_id: string;
  reservation_channel: string;
  reservation_date: Date|string;
  pay_date: Date|string;
  total: number;
  client_id: string;
  provider_name: string;
  travel_date: Date|string;
  bank_name: string;
  observations: string;
}
