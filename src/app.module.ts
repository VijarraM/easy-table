import { Module } from '@nestjs/common';
import { TablesModule } from './tables/tables.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TablesModule,
    UsersModule,
  ],
  controllers: [UsersController],
})
export class AppModule {}
