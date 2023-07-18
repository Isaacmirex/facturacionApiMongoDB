import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from 'src/schemas/productos.schema';
import { Model } from 'mongoose';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { UpdateProductoDto } from 'src/dto/update-producto.dto';
@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto.name) private productoModel: Model<Producto>,
  ) {}
  findAll() {
    return this.productoModel.find();
  }
  async create(createProducto: CreateProductoDto) {
    const newProducto = new this.productoModel(createProducto);
    return newProducto.save();
  }
  async findOne(codigo_producto: string) {
    return this.productoModel.findById(codigo_producto);
  }
  async delete(codigo_producto: string) {
    return this.productoModel.findByIdAndDelete(codigo_producto);
  }
  async actualizar(codigo_producto: string, producto: UpdateProductoDto) {
    return this.productoModel.findByIdAndUpdate(codigo_producto, producto, {
      new: true,
    });
  }
}
