import { Pay } from './pay.interface';
export interface PayTransfer extends Pay {
  voucher_number: string; // numero de comprobante
  transfer_total: number;
}
