import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TablesEntity } from '../entities/tables.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { TableDTO, TableUpdateDTO } from '../dto/table.dto';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(TablesEntity)
    private readonly tableRepository: Repository<TablesEntity>,
  ) {}

  public async createTable(body: TableDTO): Promise<TablesEntity> {
    try {
      const table: TablesEntity = await this.tableRepository.save(body);
      if (!table) {
        throw new BadRequestException('No se pudo crear la Mesa');
      }
      return table;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  public async findTables(): Promise<TablesEntity[]> {
    try {
      const tables: TablesEntity[] = await this.tableRepository.find();
      if (tables.length === 0) {
        throw new NotFoundException('No se encontraron mesas');
      }
      return tables;
    } catch (error) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findTableById(id: string): Promise<TablesEntity> {
    try {
      const table: TablesEntity = await this.tableRepository
        .createQueryBuilder('table')
        .where({ id })
        .getOne();
      if (!table) {
        throw new NotFoundException('Mesa no encontrada');
      }
      return table;
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

  public async updateTable(
    body: TableUpdateDTO,
    id: string,
  ): Promise<UpdateResult | undefined> {
    try {
      const table: UpdateResult = await this.tableRepository.update(id, body);
      if (table.affected === 0) {
        throw new NotFoundException('No se encontró mesa para modificar');
      }
      return table;
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

  public async deleteTable(id: string): Promise<DeleteResult | undefined> {
    try {
      const table: DeleteResult = await this.tableRepository.delete(id);
      if (table.affected === 0) {
        throw new NotFoundException('No se encontró mesa para eliminar');
      }
      return table;
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
