import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Parametro } from '../schemas/parametro.schema';
import { Model } from 'mongoose';
import { CreateParametroDto } from '../dto/create-parametro.dto';
import { UpdateParametroDto } from '../dto/update-parametro.dto';
@Injectable()
export class ParametroService {
  constructor(
    @InjectModel(Parametro.name) private parametroModel: Model<Parametro>,
  ) {}
  findAll() {
    return this.parametroModel.find();
  }
  async create(createParametro: CreateParametroDto) {
    const newParametro = new this.parametroModel(createParametro);
    return newParametro.save();
  }
  async findOne(nombre_parametro: string) {
    return this.parametroModel.findById(nombre_parametro);
  }
  async delete(nombre_parametro: string) {
    return this.parametroModel.findByIdAndDelete(nombre_parametro);
  }
  async Actualizar(nombre_parametro: string, parametro: UpdateParametroDto) {
    return this.parametroModel.findByIdAndUpdate(nombre_parametro, parametro, {
      new: true,
    });
  }
}
