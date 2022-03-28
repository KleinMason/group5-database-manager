// import * as _bcrypt from 'bcryptjs';
import { inject, injectable } from 'inversify';
import { IIslandProjectDatabaseContext, Product } from 'sample-database';
import { TYPES } from '../composition/app.composition.types';

export interface IProductService {
    getAllProduct:() => Promise<Product[]>;
    getProduct:(userId: number) => Promise<Product>;
}

@injectable()
export class ProductService implements IProductService {

    constructor(@inject(TYPES.IslandProjectDatabaseContext) private context: IIslandProjectDatabaseContext) { }

    getAllProduct = (): Promise<Product[]> => {
        return this.context.models.Product.find({
            columns: ['productId', 'productType', 'name', 'cost', 'productImage', 'isOnSale']
        });
    };

    getProduct = (productId: number): Promise<Product> => {
        return this.context.models.Product.findOne({
           identity: 'productId',
           columns: ['productId', 'productType', 'name', 'cost', 'productImage', 'isOnSale'],
           args: [productId]
        });
    };
}