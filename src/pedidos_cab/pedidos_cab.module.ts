import { Module } from '@nestjs/common';
import { PedidosCabController } from './pedidos_cab.controller';
import { PedidosCabService } from './pedidos_cab.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoCab, PedidoCabSchema } from 'src/schemas/pedidos_cab.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PedidoCab.name,
        schema: PedidoCabSchema,
      },
    ]),
  ],
  controllers: [PedidosCabController],
  providers: [PedidosCabService],
})
export class PedidosCabModule {}
