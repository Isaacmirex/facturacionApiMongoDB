import { Module } from '@nestjs/common';
import { FacturacionCabController } from './facturacion_cab.controller';
import { FacturacionCabService } from './facturacion_cab.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FacturaCab,
  FacturaCabSchema,
} from 'src/schemas/facturacion_cab.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FacturaCab.name,
        schema: FacturaCabSchema,
      },
    ]),
  ],
  controllers: [FacturacionCabController],
  providers: [FacturacionCabService],
})
export class FacturacionCabModule {}
