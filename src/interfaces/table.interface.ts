import { IReservation } from './reservation.interface';
import { IRestaurant } from './restaurant.interface';

export interface ITable {
  number: number;
  seats: number;
  location: string;
  reservations?: IReservation[];
  restaurant?: IRestaurant;
}
