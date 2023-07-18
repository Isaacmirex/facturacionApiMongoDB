import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { FacturacionCabService } from './facturacion_cab.service';
import { CreateFacturacion_cabDto } from 'src/dto/create-facturacion_cab.dto';
@Controller('facturacion-cab')
export class FacturacionCabController {
  constructor(private facturacionCabService: FacturacionCabService) {}
  @Get()
  findAll() {
    return this.facturacionCabService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturacionCabService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateFacturacion_cabDto) {
    return this.facturacionCabService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.facturacionCabService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.facturacionCabService.actualizar(id, body);
  }
}
