export interface UpdateProductoDto {
  nombre?: string;
  descripcion?: string;
  precio_unitario?: number;
  existencia?: number;
  tiene_impuesto?: string;
  image_producto?: string;
}
