import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
@Controller('producto')
export class ProductoController {
  constructor(private productoService: ProductoService) {}
  @Get()
  findAll() {
    return this.productoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateProductoDto) {
    return this.productoService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productoService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.productoService.actualizar(id, body);
  }
}
