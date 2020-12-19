import {DefaultCrudRepository} from '@loopback/repository';
import {Reservacion, ReservacionRelations} from '../models';
import {BdLocalDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReservacionRepository extends DefaultCrudRepository<
  Reservacion,
  typeof Reservacion.prototype.id,
  ReservacionRelations
> {
  constructor(
    @inject('datasources.BDLocal') dataSource: BdLocalDataSource,
  ) {
    super(Reservacion, dataSource);
  }
}
