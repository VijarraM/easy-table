import { Injectable } from '@nestjs/common';
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
      return await this.tableRepository.save(body);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findTables(): Promise<TablesEntity[]> {
    try {
      return await this.tableRepository.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findTableById(id: string): Promise<TablesEntity> {
    try {
      return await this.tableRepository
        .createQueryBuilder('table')
        .where({ id })
        .getOne();
    } catch (error) {
      throw new Error(error);
    }
  }

  public async updateTable(
    body: TableUpdateDTO,
    id: string,
  ): Promise<UpdateResult | undefined> {
    try {
      const table: UpdateResult = await this.tableRepository.update(id, body);
      if (table.affected === 0) {
        return undefined;
      }
      return table;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async deleteTable(id: string): Promise<DeleteResult | undefined> {
    try {
      const table: DeleteResult = await this.tableRepository.delete(id);
      if (table.affected === 0) {
        return undefined;
      }
      return table;
    } catch (error) {
      throw new Error(error);
    }
  }
}
