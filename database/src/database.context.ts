import { DatabaseContext, Collection } from 'mysql-shaman';
import { Inventory } from './models/inventory';
import { Product } from './models/product';

export interface IIslandProjectDatabaseContext {
  models: {
    Inventory: Collection<Inventory>,
    Product: Collection<Product>
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class IslandProjectDatabaseContext extends DatabaseContext implements IIslandProjectDatabaseContext {

  models = { 
    Inventory: new Collection<Inventory>(),
    Product: new Collection<Product>()
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}