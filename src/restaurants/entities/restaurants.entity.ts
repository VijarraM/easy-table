import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { IRestaurant } from 'src/interfaces/restaurant.interface';
import { ReservationsEntity } from 'src/reservations/entities/reservations.entity';
import { TablesEntity } from 'src/tables/entities/tables.entity';
@Entity({ name: 'restaurants' })
export class RestaurantsEntity extends BaseEntity implements IRestaurant {
  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone: number;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  openingHours: number;

  @Column()
  closingHours: number;

  @OneToMany(() => ReservationsEntity, (reservation) => reservation.restaurant)
  reservations: ReservationsEntity[];

  @OneToMany(() => TablesEntity, (table) => table.restaurant)
  tables: TablesEntity[];
}
