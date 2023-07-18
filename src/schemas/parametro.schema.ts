import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Parametro {
  @Prop({ unique: true, required: true })
  nombre_parametro: string;

  @Prop({ required: true })
  valor_parametro: string;
}

export const ParametroSchema = SchemaFactory.createForClass(Parametro);
