import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FacturaDet } from 'src/schemas/facturacion_det.schema';
import { Model } from 'mongoose';
import { CreateFacturacion_detDto } from 'src/dto/create-facturacion_det.dto';
import { UpdateFacturacion_detDto } from 'src/dto/update-facturacion_det.dto';
@Injectable()
export class FacturacionDetService {
  constructor(
    @InjectModel(FacturaDet.name)
    private facturacionDetModel: Model<FacturaDet>,
  ) {}
  findAll() {
    return this.facturacionDetModel.find();
  }
  async create(createFacturaDet: CreateFacturacion_detDto) {
    const newFacturacionDet = new this.facturacionDetModel(createFacturaDet);
    return newFacturacionDet.save();
  }
  async findOne(numero_factura_det: string) {
    return this.facturacionDetModel.findById(numero_factura_det);
  }
  async delete(numero_factura_det: string) {
    return this.facturacionDetModel.findByIdAndDelete(numero_factura_det);
  }
  async actualizar(
    numero_factura_det: string,
    facturaDet: UpdateFacturacion_detDto,
  ) {
    return this.facturacionDetModel.findByIdAndUpdate(
      numero_factura_det,
      facturaDet,
      {
        new: true,
      },
    );
  }
}
