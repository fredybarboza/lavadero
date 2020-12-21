export interface Factura{
    id?: number;
    nombre: string;
    apellido: string;
    direccion: string;
    numero_documento: string;
    servicio: string,
    monto: string,
    created_at?: string;
    updated_at?: string;
}