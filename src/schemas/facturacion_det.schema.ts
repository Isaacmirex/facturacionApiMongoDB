import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class FacturaDet {
  @Prop({ unique: true, required: true })
  numero_factura_det: number;

  @Prop({ required: true })
  numero_factura: string;

  @Prop({ required: true })
  codigo_producto: number;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precio_unitario_venta: number;
}

export const FacturaDetSchema = SchemaFactory.createForClass(FacturaDet);
