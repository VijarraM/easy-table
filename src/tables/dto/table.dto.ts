import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
}
