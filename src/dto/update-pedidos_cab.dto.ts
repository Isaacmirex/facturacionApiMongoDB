import { PedidoDet } from '../schemas/pedidos_det.schema';
export interface UpdatePedidos_cabDto {
  fecha_pedido?: Date;
  cedula_cliente?: string;
  id_estado_pedido?: string;
  subtotal?: number;
  pedidosDetalles?: PedidoDet[];
}
