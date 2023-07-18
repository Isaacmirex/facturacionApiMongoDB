import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { EstadoPedidoService } from './estado_pedido.service';
import { createEstado_pedidoDto } from 'src/dto/create-estado_pedido.dto';
@Controller('estado-pedido')
export class EstadoPedidoController {
  constructor(private estadoService: EstadoPedidoService) {}
  @Get()
  async findAll() {
    return this.estadoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadoService.findOne(id);
  }
  @Post()
  create(@Body() body: createEstado_pedidoDto) {
    return this.estadoService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.estadoService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.estadoService.actualizar(id, body);
  }
}
