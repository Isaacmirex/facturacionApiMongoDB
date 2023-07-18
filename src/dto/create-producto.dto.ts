export interface CreateProductoDto {
  codigo_producto: number;
  nombre: string;
  descripcion: string;
  precio_unitario: number;
  existencia: number;
  tiene_impuesto: string;
  image_producto: string;
}
