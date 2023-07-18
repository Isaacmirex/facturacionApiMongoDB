import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { PedidosCabService } from './pedidos_cab.service';
import { CreatePedidos_cabDto } from 'src/dto/create-pedidos_cab.dto';
@Controller('pedidos-cab')
export class PedidosCabController {
  constructor(private pedidosCabService: PedidosCabService) {}
  @Get()
  findAll() {
    return this.pedidosCabService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosCabService.findOne(id);
  }
  @Post()
  create(@Body() body: CreatePedidos_cabDto) {
    return this.pedidosCabService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pedidosCabService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.pedidosCabService.actualizar(id, body);
  }
}
