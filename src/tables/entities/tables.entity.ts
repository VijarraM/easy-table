import { ITable } from 'src/interfaces/table.interface';
import { BaseEntity, Column, Entity } from 'typeorm';
@Entity({ name: 'tables' })
export class TablesEntity extends BaseEntity implements ITable {
  @Column()
  number: number;
  @Column()
  seats: number;
  @Column()
  location: string;
}
