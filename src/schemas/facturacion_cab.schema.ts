import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { FacturaDet, FacturaDetSchema } from './facturacion_det.schema';
@Schema({
  timestamps: true,
})
export class FacturaCab {
  @Prop({ unique: true, required: true, trim: true })
  numero_factura: string;

  @Prop({ required: true, trim: true })
  cedula_cliente: string;

  @Prop({ required: true })
  fecha_emision: Date;

  @Prop({ required: true })
  subtotal: number;

  @Prop({ required: true })
  base_cero: number;

  @Prop({ required: true })
  valor_iva: number;

  @Prop({ required: true })
  total: number;

  @Prop({ required: true, default: true })
  estado: boolean;
  // Relación de maestro-detalle con FacturaDet
  @Prop({ type: [FacturaDetSchema], required: true })
  facturaDetalles: FacturaDet[];
}

export const FacturaCabSchema = SchemaFactory.createForClass(FacturaCab);
