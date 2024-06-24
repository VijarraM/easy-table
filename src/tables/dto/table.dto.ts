import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { UUID } from 'crypto';
import { RestaurantsEntity } from 'src/restaurants/entities/restaurants.entity';

export class TableDTO {
  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  @IsNumber()
  seats: number;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsUUID()
  restaurant: RestaurantsEntity;
}

export class TableUpdateDTO {
  @IsOptional()
  @IsNumber()
  number: number;

  @IsOptional()
  @IsNumber()
  seats: number;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsUUID()
  restaurant: RestaurantsEntity;
}
