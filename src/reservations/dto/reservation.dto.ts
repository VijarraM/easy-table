import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { STATUS } from 'src/constants/reservation.status';
import { RestaurantsEntity } from 'src/restaurants/entities/restaurants.entity';
import { TablesEntity } from 'src/tables/entities/tables.entity';
import { UsersEntity } from 'src/users/entities/users.entity';

export class ReservationDTO {
  @IsNotEmpty()
  @IsNumber()
  seats: number;

  @IsNotEmpty()
  @IsDate()
  reservationTime: Date;

  @IsNotEmpty()
  @IsEnum(STATUS)
  status: STATUS;

  @IsNotEmpty()
  @IsUUID()
  user: UsersEntity;

  @IsNotEmpty()
  @IsUUID()
  table: TablesEntity;

  @IsNotEmpty()
  @IsUUID()
  restaurant: RestaurantsEntity;
}

export class ReservationUpdateDTO {
  @IsOptional()
  @IsNumber()
  seats: number;

  @IsOptional()
  @IsDate()
  reservationTime: Date;

  @IsOptional()
  @IsEnum(STATUS)
  status: STATUS;

  @IsOptional()
  @IsUUID()
  user: UsersEntity;

  @IsOptional()
  @IsUUID()
  table: TablesEntity;

  @IsOptional()
  @IsUUID()
  restaurant: RestaurantsEntity;
}
