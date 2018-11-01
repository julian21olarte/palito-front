export interface Reservation {
  business_client_id: string;
  client_id: string;
  crm_id: string;
  destiny: string;
  intermediary_provider_id: string;
  origin: string;
  provider_id: string;
  provider_name: string;
  reservation_channel: string;
  reservation_date: Date;
  status: string;
  total: number;
  travel_date: Date;
  _id: string;
  code: string;
}
