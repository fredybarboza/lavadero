export interface Pedido{
    id?: number;
    id_usuario: string;
    id_vehiculo: string;
    id_servicio: string;
    monto: string;
    turno?: string,
    created_at?: string;
    updated_at?: string;
}