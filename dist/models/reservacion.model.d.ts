import { Entity } from '@loopback/repository';
export declare class Reservacion extends Entity {
    id?: number;
    fecha: string;
    evento: string;
    [prop: string]: any;
    constructor(data?: Partial<Reservacion>);
}
export interface ReservacionRelations {
}
export declare type ReservacionWithRelations = Reservacion & ReservacionRelations;
