import { IUser } from 'src/interfaces/user.interface';
import { BaseEntity, Column, Entity } from 'typeorm';
@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  phone: number;
  @Column()
  role: string;
}
