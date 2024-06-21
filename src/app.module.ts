import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { UsersController } from './users/controllers/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { ReservationsModule } from './reservations/reservations.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantsService } from './services/restaurants/restaurants.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(DataSourceConfig),
    TablesModule,
    UsersModule,
    ReservationsModule,
    RestaurantsModule,
  ],
  controllers: [UsersController],
  providers: [RestaurantsService],
})
export class AppModule {}
