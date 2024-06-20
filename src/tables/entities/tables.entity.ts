import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ITable } from '../../interfaces/table.interface';
import { ReservationsEntity } from '../../reservations/entities/reservations.entity';
import { RestaurantsEntity } from '../../restaurants/entities/restaurants.entity';
@Entity({ name: 'tables' })
export class TablesEntity extends BaseEntity implements ITable {
  @Column()
  number: number;

  @Column()
  seats: number;

  @Column()
  location: string;

  @OneToMany(() => ReservationsEntity, (reservation) => reservation.table)
  reservations: ReservationsEntity[];

  @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.tables)
  restaurant: RestaurantsEntity;
}
