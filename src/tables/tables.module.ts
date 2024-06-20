import { Module } from '@nestjs/common';
import { TablesService } from './services/tables.service';
import { TablesController } from './controllers/tables.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TablesEntity } from './entities/tables.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TablesEntity])],
  providers: [TablesService],
  controllers: [TablesController],
})
export class TablesModule {}
