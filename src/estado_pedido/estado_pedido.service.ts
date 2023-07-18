import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EstadoPedido } from '../schemas/estado_pedido.schema';
import { Model } from 'mongoose';
import { createEstado_pedidoDto } from '../dto/create-estado_pedido.dto';
import { updateEstado_pedidoDto } from '../dto/update-estado_pedio.dto';

@Injectable()
export class EstadoPedidoService {
  constructor(
    @InjectModel(EstadoPedido.name) private estadoModel: Model<EstadoPedido>,
  ) {}
  findAll() {
    return this.estadoModel.find();
  }
  async create(createEstado: createEstado_pedidoDto) {
    const newEstadoP = new this.estadoModel(createEstado);
    return newEstadoP.save();
  }
  async findOne(id_estado_pedido: string) {
    return this.estadoModel.findById(id_estado_pedido);
  }
  async delete(id_estado_pedido: string) {
    return this.estadoModel.findByIdAndDelete(id_estado_pedido);
  }
  async actualizar(id_estado_pedido: string, estado: updateEstado_pedidoDto) {
    return this.estadoModel.findByIdAndUpdate(id_estado_pedido, estado, {
      new: true,
    });
  }
}
