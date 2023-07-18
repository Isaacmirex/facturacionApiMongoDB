import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ParametroService } from './parametro.service';
import { CreateParametroDto } from 'src/dto/create-parametro.dto';
@Controller('parametro')
export class ParametroController {
  constructor(private parametroService: ParametroService) {}
  @Get()
  findAll() {
    return this.parametroService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parametroService.findOne(id);
  }
  @Post()
  create(@Body() body: CreateParametroDto) {
    return this.parametroService.create(body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.parametroService.delete(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.parametroService.Actualizar(id, body);
  }
}
