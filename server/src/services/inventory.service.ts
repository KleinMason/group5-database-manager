// import * as _bcrypt from 'bcryptjs';
import { inject, injectable } from 'inversify';
import { IIslandProjectDatabaseContext, Inventory } from 'sample-database';
import { TYPES } from '../composition/app.composition.types';

export interface IInventoryService {
    getAllInventory:() => Promise<Inventory[]>;
    getInventory:(inventoryId: number) => Promise<Inventory>;
}

@injectable()
export class InventoryService implements IInventoryService {

    constructor(@inject(TYPES.IslandProjectDatabaseContext) private context: IIslandProjectDatabaseContext) { }

    getAllInventory = (): Promise<Inventory[]> => {
        return this.context.models.Inventory.find({
            columns: ['inventoryId', 'productId', 'distributionCenterId', 'size', 'color', 'quantity', 'gender']
        });
    };

    getInventory = (inventoryId: number): Promise<Inventory> => {
        return this.context.models.Inventory.findOne({
           identity: 'inventoryId',
           columns: ['inventoryId', 'productId', 'distributionCenterId', 'size', 'color', 'quantity', 'gender'],
           args: [inventoryId]
        });
    };
}