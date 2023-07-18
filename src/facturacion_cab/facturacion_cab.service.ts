import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FacturaCab } from '../schemas/facturacion_cab.schema';
import { Model } from 'mongoose';
import { CreateFacturacion_cabDto } from '../dto/create-facturacion_cab.dto';
import { UpdateFacturacion_cabDto } from '../dto/update-facturacion_cab.dto';
@Injectable()
export class FacturacionCabService {
  constructor(
    @InjectModel(FacturaCab.name) private facturaCabModel: Model<FacturaCab>,
  ) {}
  findAll() {
    return this.facturaCabModel.find();
  }
  async create(createFacturaCab: CreateFacturacion_cabDto) {
    const newFacturacionCab = new this.facturaCabModel(createFacturaCab);
    return newFacturacionCab.save();
  }
  async findOne(numero_factura: string) {
    return this.facturaCabModel.findById(numero_factura);
  }
  async delete(numero_factura: string) {
    return this.facturaCabModel.findByIdAndDelete(numero_factura);
  }
  async actualizar(
    numero_factura: string,
    facturacionCab: UpdateFacturacion_cabDto,
  ) {
    return this.facturaCabModel.findByIdAndUpdate(
      numero_factura,
      facturacionCab,
      {
        new: true,
      },
    );
  }
}
