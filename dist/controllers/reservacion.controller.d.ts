import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Reservacion } from '../models';
import { ReservacionRepository } from '../repositories';
export declare class ReservacionController {
    reservacionRepository: ReservacionRepository;
    constructor(reservacionRepository: ReservacionRepository);
    create(reservacion: Omit<Reservacion, 'id'>): Promise<Reservacion>;
    count(where?: Where<Reservacion>): Promise<Count>;
    find(filter?: Filter<Reservacion>): Promise<Reservacion[]>;
    updateAll(reservacion: Reservacion, where?: Where<Reservacion>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Reservacion>): Promise<Reservacion>;
    updateById(id: number, reservacion: Reservacion): Promise<void>;
    replaceById(id: number, reservacion: Reservacion): Promise<void>;
    deleteById(id: number): Promise<void>;
}
