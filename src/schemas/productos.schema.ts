import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Producto {
  @Prop({ unique: true, required: true })
  codigo_producto: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  descripcion: string;

  @Prop({ required: true })
  precio_unitario: number;

  @Prop({ required: true })
  existencia: number;

  @Prop({ required: true })
  tiene_impuesto: string;

  @Prop({ trim: true })
  image_producto: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
