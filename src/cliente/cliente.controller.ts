import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { createClienteDto } from 'src/dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}
  @Get()
  findAll() {
    return this.clienteService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }
  @Post()
  create(@Body() body: createClienteDto) {
    return this.clienteService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.clienteService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.clienteService.actualizar(id, body);
  }
}
