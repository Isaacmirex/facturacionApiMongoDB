import { FacturaDet } from '../schemas/facturacion_det.schema';
export interface UpdateFacturacion_cabDto {
  cedula_cliente?: string;
  fecha_emision?: Date;
  subtotal?: number;
  base_cero?: number;
  valor_iva?: number;
  total?: number;
  estado?: boolean;
  facturaDetalles?: FacturaDet[];
}
