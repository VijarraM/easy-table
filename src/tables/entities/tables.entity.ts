import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { ITable } from 'src/interfaces/table.interface';
import { ReservationsEntity } from 'src/reservations/entities/reservations.entity';
import { RestaurantsEntity } from 'src/restaurants/entities/restaurants.entity';
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
