import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { EstadoPedidoModule } from './estado_pedido/estado_pedido.module';
import { FacturacionCabModule } from './facturacion_cab/facturacion_cab.module';
import { FacturacionDetModule } from './facturacion_det/facturacion_det.module';
import { ParametroModule } from './parametro/parametro.module';
import { PedidosCabModule } from './pedidos_cab/pedidos_cab.module';
import { PedidosDetModule } from './pedidos_det/pedidos_det.module';
import { ProductoModule } from './producto/producto.module';
import { ClienteService } from './cliente/cliente.service';
import { EstadoPedidoService } from './estado_pedido/estado_pedido.service';
import { FacturacionCabService } from './facturacion_cab/facturacion_cab.service';
import { FacturacionDetService } from './facturacion_det/facturacion_det.service';
import { ParametroService } from './parametro/parametro.service';
import { PedidosCabService } from './pedidos_cab/pedidos_cab.service';
import { PedidosDetService } from './pedidos_det/pedidos_det.service';
import { ProductoService } from './producto/producto.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb://localhost/nest',
      'mongodb://mongodb-server:KKhYrPPGM7jKSdqZtlVsdVQkeWUTlyTjiKtR1EQ4KLg11OmMR9USDvZ1Vu2ZyMXw1xXoqsfIBvnsACDbCJPo1Q==@mongodb-server.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@mongodb-server@',
    ),
    ClienteModule,
    EstadoPedidoModule,
    FacturacionCabModule,
    FacturacionDetModule,
    ParametroModule,
    PedidosCabModule,
    PedidosDetModule,
    ProductoModule,
  ],
  // providers: [
  //   ClienteService,
  //   EstadoPedidoService,
  //   FacturacionCabService,
  //   FacturacionDetService,
  //   ParametroService,
  //   PedidosCabService,
  //   PedidosDetService,
  //   ProductoService,
  // ],
})
export class AppModule {}
