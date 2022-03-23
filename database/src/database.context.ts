import { DatabaseContext, Collection } from 'mysql-shaman';
import { Product } from './models/Product';

export interface ISampleDatabaseContext {
  models: {
    Product: Collection<Product>
  }
  runQuery: <T>(query: string, args: any) => Promise<T>;
}

export class SampleDatabaseContext extends DatabaseContext implements ISampleDatabaseContext {

  models = { 
    Product: new Collection<Product>()
  }

  runQuery = <T>(query: string, args: any): Promise<T> => {
    return this.query<T>(query, args)
  }

}