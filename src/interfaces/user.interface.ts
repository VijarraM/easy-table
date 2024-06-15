import { ROLES } from 'src/constants/roles';
import { IReservation } from './reservation.interface';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: number;
  role: ROLES;
  reservations?: IReservation[];
}
