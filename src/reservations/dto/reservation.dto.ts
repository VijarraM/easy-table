import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ReservationDTO {
  @IsNotEmpty()
  @IsNumber()
  seats: number;

  @IsNotEmpty()
  @IsDate()
  reservationTime: Date;

  @IsNotEmpty()
  @IsString()
  status: string;
}

export class ReservationUpdateDTO {
  @IsOptional()
  @IsNumber()
  seats: number;

  @IsOptional()
  @IsDate()
  reservationTime: Date;

  @IsOptional()
  @IsString()
  status: string;
}
