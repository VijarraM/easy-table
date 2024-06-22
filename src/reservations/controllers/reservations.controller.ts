import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ReservationsService } from '../services/reservations.service';
import { ReservationDTO, ReservationUpdateDTO } from '../dto/reservation.dto';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post('register')
  public async registerUser(@Body() body: ReservationDTO) {
    return await this.reservationsService.createReservation(body);
  }

  @Get('all')
  public async findAllUsers() {
    return await this.reservationsService.findReservations();
  }

  @Get(':id')
  public async findUserById(@Param('id') id: string) {
    return await this.reservationsService.findReservationById(id);
  }

  @Put('edit/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: ReservationUpdateDTO,
  ) {
    return await this.reservationsService.updateReservation(body, id);
  }

  @Delete('delete/:id')
  public async deleteReservation(@Param('id') id: string) {
    return await this.reservationsService.deleteReservation(id);
  }
}
