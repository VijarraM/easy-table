import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RestaurantsService } from '../services/restaurants.service';
import { RestaurantDTO, RestaurantUpdateDTO } from '../dto/restaurant.dto';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post('register')
  public async registerRestaurant(@Body() body: RestaurantDTO) {
    return await this.restaurantsService.createRestaurant(body);
  }

  @Get('all')
  public async findAllRestaurants() {
    return await this.restaurantsService.findRestaurants();
  }

  @Get(':id')
  public async findRestaurantById(@Param('id') id: string) {
    return await this.restaurantsService.findRestaurantById(id);
  }

  @Put('edit/:id')
  public async updateRestaurant(
    @Param('id') id: string,
    @Body() body: RestaurantUpdateDTO,
  ) {
    return await this.restaurantsService.updateRestaurant(body, id);
  }

  @Delete('delete/:id')
  public async deleteRestaurant(@Param('id') id: string) {
    return await this.restaurantsService.deleteRestaurant(id);
  }
}
