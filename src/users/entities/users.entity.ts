import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/config/base.entity';
import { ROLES } from 'src/constants/roles';
import { IUser } from 'src/interfaces/user.interface';
import { ReservationsEntity } from 'src/reservations/entities/reservations.entity';
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
