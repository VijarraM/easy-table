import { Module } from '@nestjs/common';
import { RestaurantsService } from './services/restaurants.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsEntity } from './entities/restaurants.entity';
import { RestaurantsController } from './controllers/restaurants.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantsEntity])],
  providers: [RestaurantsService],
  controllers: [RestaurantsController],
})
export class RestaurantsModule {}
