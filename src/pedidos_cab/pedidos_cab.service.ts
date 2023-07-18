import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PedidoCab } from '../schemas/pedidos_cab.schema';
import { Model } from 'mongoose';
import { CreatePedidos_cabDto } from '../dto/create-pedidos_cab.dto';
import { UpdatePedidos_cabDto } from '../dto/update-pedidos_cab.dto';
@Injectable()
export class PedidosCabService {
  constructor(
    @InjectModel(PedidoCab.name) private pedidoCabModel: Model<PedidoCab>,
  ) {}
  findAll() {
    return this.pedidoCabModel.find();
  }
  async create(createPedidosCab: CreatePedidos_cabDto) {
    const newPedidosCab = new this.pedidoCabModel(createPedidosCab);
    return newPedidosCab.save();
  }
  async findOne(numero_pedido: string) {
    return this.pedidoCabModel.findById(numero_pedido);
  }
  async delete(numero_pedido: string) {
    return this.pedidoCabModel.findByIdAndDelete(numero_pedido);
  }
  async actualizar(numero_pedido: string, pedidoCab: UpdatePedidos_cabDto) {
    return this.pedidoCabModel.findByIdAndUpdate(numero_pedido, pedidoCab, {
      new: true,
    });
  }
}
