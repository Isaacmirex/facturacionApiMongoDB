import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PedidoDet } from 'src/schemas/pedidos_det.schema';
import { Model } from 'mongoose';
import { CreatePedidos_detDto } from 'src/dto/create-pedidos_det.dto';
import { UpdatePedidos_detDto } from 'src/dto/update-pedidos_det.dto';
@Injectable()
export class PedidosDetService {
  constructor(
    @InjectModel(PedidoDet.name) private pedidoDetModel: Model<PedidoDet>,
  ) {}
  findAll() {
    return this.pedidoDetModel.find();
  }
  async create(createPedidoDet: CreatePedidos_detDto) {
    const newPedidoDet = new this.pedidoDetModel(createPedidoDet);
    return newPedidoDet.save();
  }
  async findOne(numero_pedido_det: string) {
    return this.pedidoDetModel.findById(numero_pedido_det);
  }
  async delete(numero_pedido_det: string) {
    return this.pedidoDetModel.findByIdAndDelete(numero_pedido_det);
  }
  async actualizar(numero_pedido_det: string, pedidoDet: UpdatePedidos_detDto) {
    return this.pedidoDetModel.findByIdAndUpdate(numero_pedido_det, pedidoDet, {
      new: true,
    });
  }
}
