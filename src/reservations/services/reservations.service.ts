import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReservationsEntity } from '../entities/reservations.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ReservationDTO, ReservationUpdateDTO } from '../dto/reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(ReservationsEntity)
    private readonly reservationRepository: Repository<ReservationsEntity>,
  ) {}

  public async createReservation(
    body: ReservationDTO,
  ): Promise<ReservationsEntity> {
    try {
      const reservation: ReservationsEntity =
        await this.reservationRepository.save(body);
      if (!reservation) {
        throw new BadRequestException('No se pudo crear la Reserva');
      }
      return reservation;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async findReservations(): Promise<ReservationsEntity[]> {
    try {
      const reservations: ReservationsEntity[] =
        await this.reservationRepository.find();
      if (reservations.length === 0) {
        throw new NotFoundException('No se encontraron Reservas');
      }
      return reservations;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findReservationById(id: string): Promise<ReservationsEntity> {
    try {
      const reservation: ReservationsEntity = await this.reservationRepository
        .createQueryBuilder('reservation')
        .where({ id })
        .getOne();
      if (!reservation) {
        throw new NotFoundException('No se encontró Reserva');
      }
      return reservation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async updateReservation(
    body: ReservationUpdateDTO,
    id: string,
  ): Promise<UpdateResult | undefined> {
    try {
      const reservation: UpdateResult = await this.reservationRepository.update(
        id,
        body,
      );
      if (reservation.affected === 0) {
        throw new NotFoundException('No se encontró Reserva para modificar');
      }
      return reservation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async deleteReservation(
    id: string,
  ): Promise<DeleteResult | undefined> {
    try {
      const reservation: DeleteResult =
        await this.reservationRepository.delete(id);
      if (reservation.affected === 0) {
        throw new NotFoundException('No se encontró Reserva para eliminar');
      }
      return reservation;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
