import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cliente } from '../schemas/cliente.schema';
import { Model } from 'mongoose';
import { createClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectModel(Cliente.name) private clienteModel: Model<Cliente>,
  ) {}
  async findAll() {
    return this.clienteModel.find();
  }
  async create(createCliente: createClienteDto) {
    const newCliente = new this.clienteModel(createCliente);
    return newCliente.save();
  }
  async findOne(cedula_cliente: string) {
    return this.clienteModel.findById(cedula_cliente);
  }
  async delete(cedula_cliente: string) {
    return this.clienteModel.findByIdAndDelete(cedula_cliente);
  }
  async actualizar(cedula_cliente: string, cliente: UpdateClienteDto) {
    return this.clienteModel.findByIdAndUpdate(cedula_cliente, cliente, {
      new: true,
    });
  }
}
