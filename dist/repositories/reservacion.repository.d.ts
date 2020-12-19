import { DefaultCrudRepository } from '@loopback/repository';
import { Reservacion, ReservacionRelations } from '../models';
import { BdLocalDataSource } from '../datasources';
export declare class ReservacionRepository extends DefaultCrudRepository<Reservacion, typeof Reservacion.prototype.id, ReservacionRelations> {
    constructor(dataSource: BdLocalDataSource);
}
