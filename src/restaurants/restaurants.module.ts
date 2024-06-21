import { Module } from '@nestjs/common';
import { RestaurantsService } from './services/restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsEntity } from './entities/restaurants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantsEntity])],
  providers: [RestaurantsService],
})
export class RestaurantsModule {}
