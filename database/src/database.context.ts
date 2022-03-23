import { DatabaseContext, Collection } from 'mysql-shaman';
import { Inventory } from './models/inventory';

export interface ISampleDatabaseContext {
  models: {
    inventory: Collection<Inventory>
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class SampleDatabaseContext extends DatabaseContext implements ISampleDatabaseContext {

  models = { 
    inventory: new Collection<Inventory>()
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}