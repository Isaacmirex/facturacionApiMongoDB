import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { PedidoDet, PedidoDetSchema } from './pedidos_det.schema';
@Schema({
  timestamps: true,
})
export class PedidoCab {
  @Prop({ unique: true, required: true })
  numero_pedido: number;

  @Prop({ required: true })
  fecha_pedido: Date;

  @Prop({ required: true, trim: true })
  cedula_cliente: string;

  @Prop({ required: true, trim: true })
  id_estado_pedido: string;

  @Prop({ required: true })
  subtotal: number;
  @Prop({ type: [PedidoDetSchema], required: true })
  pedidosDetalles: PedidoDet[];
}

export const PedidoCabSchema = SchemaFactory.createForClass(PedidoCab);
