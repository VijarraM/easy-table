import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ROLES } from '../../constants/roles';
import { IUser } from '../../interfaces/user.interface';
import { ReservationsEntity } from '../../reservations/entities/reservations.entity';
@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;

  @OneToMany(() => ReservationsEntity, (reservation) => reservation.user)
  reservations: ReservationsEntity[];
}
