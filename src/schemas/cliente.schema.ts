import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Cliente {
  @Prop({ unique: true, required: true, trim: true })
  cedula_cliente: string;

  @Prop({ required: true })
  nombres: string;

  @Prop({ required: true })
  apellidos: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true, trim: true })
  clave: string;
}
export const ClienteSchema = SchemaFactory.createForClass(Cliente);
