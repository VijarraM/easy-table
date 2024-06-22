import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantsEntity } from '../entities/restaurants.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RestaurantDTO, RestaurantUpdateDTO } from '../dto/restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(RestaurantsEntity)
    private readonly restaurantRepository: Repository<RestaurantsEntity>,
  ) {}

  public async createRestaurant(
    body: RestaurantDTO,
  ): Promise<RestaurantsEntity> {
    try {
      const restaurant: RestaurantsEntity =
        await this.restaurantRepository.save(body);
      if (!restaurant) {
        throw new BadRequestException('No se pudo crear el restaurant');
      }
      return restaurant;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async findRestaurants(): Promise<RestaurantsEntity[]> {
    try {
      const restaurants: RestaurantsEntity[] =
        await this.restaurantRepository.find();
      if (restaurants.length === 0) {
        throw new NotFoundException('No se encontraron Restaurants');
      }
      return restaurants;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findRestaurantById(id: string): Promise<RestaurantsEntity> {
    try {
      const restaurant: RestaurantsEntity = await this.restaurantRepository
        .createQueryBuilder('restaurant')
        .where({ id })
        .getOne();
      if (!restaurant) {
        throw new NotFoundException('No se encontró el Restaurant');
      }
      return restaurant;
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

  public async updateRestaurant(
    body: RestaurantUpdateDTO,
    id: string,
  ): Promise<UpdateResult | undefined> {
    try {
      const restaurant: UpdateResult = await this.restaurantRepository.update(
        id,
        body,
      );
      if (restaurant.affected === 0) {
        throw new NotFoundException('No se encontró Restaurant para modificar');
      }
      return restaurant;
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

  public async deleteRestaurant(id: string): Promise<DeleteResult | undefined> {
    try {
      const restaurant: DeleteResult =
        await this.restaurantRepository.delete(id);
      if (restaurant.affected === 0) {
        throw new NotFoundException('No se encontró Restaurant para eliminar');
      }
      return restaurant;
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
