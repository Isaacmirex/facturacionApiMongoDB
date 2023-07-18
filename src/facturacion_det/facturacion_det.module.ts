import { Module } from '@nestjs/common';
import { FacturacionDetController } from './facturacion_det.controller';
import { FacturacionDetService } from './facturacion_det.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FacturaDet,
  FacturaDetSchema,
} from 'src/schemas/facturacion_det.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FacturaDet.name,
        schema: FacturaDetSchema,
      },
    ]),
  ],
  controllers: [FacturacionDetController],
  providers: [FacturacionDetService],
})
export class FacturacionDetModule {}
