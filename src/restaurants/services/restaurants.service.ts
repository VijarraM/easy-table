import { Injectable } from '@nestjs/common';
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
      return await this.restaurantRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findRestaurants(): Promise<RestaurantsEntity[]> {
    try {
      return await this.restaurantRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findRestaurantById(id: string): Promise<RestaurantsEntity> {
    try {
      return await this.restaurantRepository
        .createQueryBuilder('restaurant')
        .where({ id })
        .getOne();
    } catch (error) {
      throw new Error(error);
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
        return undefined;
      }
      return restaurant;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteRestaurant(id: string): Promise<DeleteResult | undefined> {
    try {
      const restaurant: DeleteResult =
        await this.restaurantRepository.delete(id);
      if (restaurant.affected === 0) {
        return undefined;
      }
      return restaurant;
    } catch (error) {
      throw new Error(error);
    }
  }
}
