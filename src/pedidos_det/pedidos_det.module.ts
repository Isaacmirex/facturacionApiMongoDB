import { Module } from '@nestjs/common';
import { PedidosDetController } from './pedidos_det.controller';
import { PedidosDetService } from './pedidos_det.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoDet, PedidoDetSchema } from 'src/schemas/pedidos_det.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PedidoDet.name,
        schema: PedidoDetSchema,
      },
    ]),
  ],
  controllers: [PedidosDetController],
  providers: [PedidosDetService],
})
export class PedidosDetModule {}
