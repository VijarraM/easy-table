import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TablesService } from '../services/tables.service';
import { TableDTO, TableUpdateDTO } from '../dto/table.dto';

@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post('register')
  public async registerTable(@Body() body: TableDTO) {
    return await this.tablesService.createTable(body);
  }

  @Get('all')
  public async findAllTables() {
    return await this.tablesService.findTables();
  }

  @Get(':id')
  public async findTableById(@Param('id') id: string) {
    return await this.tablesService.findTableById(id);
  }

  @Put('edit/:id')
  public async updateTable(
    @Param('id') id: string,
    @Body() body: TableUpdateDTO,
  ) {
    return await this.tablesService.updateTable(body, id);
  }

  @Delete('delete/:id')
  public async deleteTable(@Param('id') id: string) {
    return await this.tablesService.deleteTable(id);
  }
}
