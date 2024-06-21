import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RestaurantDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  phone: number;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  openingHours: number;

  @IsNotEmpty()
  @IsNumber()
  closingHours: number;
}

export class RestaurantUpdateDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  phone: number;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  openingHours: number;

  @IsOptional()
  @IsNumber()
  closingHours: number;
}
