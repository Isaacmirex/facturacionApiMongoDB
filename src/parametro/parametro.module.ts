import { Module } from '@nestjs/common';
import { ParametroController } from './parametro.controller';
import { ParametroService } from './parametro.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Parametro, ParametroSchema } from 'src/schemas/parametro.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Parametro.name,
        schema: ParametroSchema,
      },
    ]),
  ],
  controllers: [ParametroController],
  providers: [ParametroService],
})
export class ParametroModule {}
