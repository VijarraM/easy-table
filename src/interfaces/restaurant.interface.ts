import { IReservation } from './reservation.interface';
import { ITable } from './table.interface';

export interface IRestaurant {
  name: string;
  address: string;
  phone: number;
  email: string;
  description: string;
  openingHours: number;
  closingHours: number;
  reservations?: IReservation[];
  tables?: ITable[];
}
