import { IRestaurant } from 'src/interfaces/restaurant.interface';
import { BaseEntity, Column, Entity } from 'typeorm';
@Entity({ name: 'restaurants' })
export class TablesEntity extends BaseEntity implements IRestaurant {
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
}
