import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { PedidosDetService } from './pedidos_det.service';
import { CreatePedidos_detDto } from 'src/dto/create-pedidos_det.dto';
@Controller('pedidos-det')
export class PedidosDetController {
  constructor(private pedidosDetService: PedidosDetService) {}
  @Get()
  findall() {
    return this.pedidosDetService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosDetService.findOne(id);
  }
  @Post()
  create(@Body() body: CreatePedidos_detDto) {
    return this.pedidosDetService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.pedidosDetService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.pedidosDetService.actualizar(id, body);
  }
}
