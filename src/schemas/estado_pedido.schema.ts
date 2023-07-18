import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class EstadoPedido {
  @Prop({ unique: true, required: true, trim: true })
  id_estado_pedido: string;

  @Prop({ required: true })
  descripcion_estado: string;
}

export const EstadoPedidoSchema = SchemaFactory.createForClass(EstadoPedido);
