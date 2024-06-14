import { IReservation } from 'src/interfaces/reservation.interface';
import { BaseEntity, Column, Entity } from 'typeorm';
@Entity({ name: 'reservations' })
export class TablesEntity extends BaseEntity implements IReservation {
  @Column()
  seats: number;
  @Column()
  reservationTime: Date;
  @Column()
  status: string;
}
