import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class PedidoDet {
  @Prop({ unique: true, required: true })
  numero_pedido_det: number;

  @Prop({ required: true })
  numero_pedido: number;

  @Prop({ required: true })
  codigo_producto: number;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precio_unitario_venta: number;
}

export const PedidoDetSchema = SchemaFactory.createForClass(PedidoDet);
