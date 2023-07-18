import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateFacturacion_detDto } from 'src/dto/create-facturacion_det.dto';
import { FacturacionDetService } from './facturacion_det.service';
@Controller('facturacion-det')
export class FacturacionDetController {
  constructor(private facturaDetService: FacturacionDetService) {}
  @Get()
  findAll() {
    return this.facturaDetService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturaDetService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateFacturacion_detDto) {
    return this.facturaDetService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.facturaDetService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.facturaDetService.actualizar(id, body);
  }
}
