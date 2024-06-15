import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { IReservation } from 'src/interfaces/reservation.interface';
import { UsersEntity } from 'src/users/entities/users.entity';
import { TablesEntity } from 'src/tables/entities/tables.entity';
import { RestaurantsEntity } from 'src/restaurants/entities/restaurants.entity';
@Entity({ name: 'reservations' })
export class ReservationsEntity extends BaseEntity implements IReservation {
  @Column()
  seats: number;

  @Column()
  reservationTime: Date;

  @Column()
  status: string;

  @ManyToOne(() => UsersEntity, (user) => user.reservations)
  user: UsersEntity;

  @ManyToOne(() => TablesEntity, (table) => table.reservations)
  table: TablesEntity;

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.reservations)
  restaurant: RestaurantsEntity;
}
