import { Module } from '@nestjs/common';
import { EstadoPedidoController } from './estado_pedido.controller';
import { EstadoPedidoService } from './estado_pedido.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  EstadoPedido,
  EstadoPedidoSchema,
} from 'src/schemas/estado_pedido.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: EstadoPedido.name,
        schema: EstadoPedidoSchema,
      },
    ]),
  ],
  controllers: [EstadoPedidoController],
  providers: [EstadoPedidoService],
})
export class EstadoPedidoModule {}
