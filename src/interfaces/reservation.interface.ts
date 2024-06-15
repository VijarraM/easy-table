import { IRestaurant } from './restaurant.interface';
import { ITable } from './table.interface';
import { IUser } from './user.interface';

export interface IReservation {
  seats: number;
  reservationTime: Date;
  status: string;
  user?: IUser;
  table?: ITable;
  restaurant?: IRestaurant;
}
