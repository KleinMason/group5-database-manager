// import { IInverntoy } from "../models/inventory.model";
import { RandomService } from "./random.service";
import { Inventory } from "../models/inventory.model";
import * as fs from 'fs';
import * as __path from 'path';

export interface IInventoryService {
    generateInsertStatements(
        productId: number, 
        distributionCenterId: number, 
        sizes: Array<string>, 
        colors: Array<string>, 
        gender: string
        ): Promise<void>;
}

export class InventoryService implements IInventoryService {
    constructor () { }
    
    private randomService: RandomService = new RandomService();
    
    generateInsertStatements = (productId: number, distributionCenterId: number, 
        sizes?: string[], colors?: string[], gender?: string): Promise<void> => {
            console.log(`generating insert statement for productId: ${productId}...`);
            let path: string = __path.join(__dirname, '../../inventory-inserts.txt'); 
            let values: string[] = [];
            const baseInsertStatement: string = 'INSERT INTO `Inventory` VALUES\n';
            sizes.forEach(size => { 
                colors.forEach(color => {
                    let randQuantity = this.randomService.getRandomInt(50);
                    let inventoryItem: Inventory = new Inventory(
                        productId, distributionCenterId, size, color, randQuantity, gender
                    );
                    values.push("(NULL, " + inventoryItem.toString() + ")")
                });
            });
            let insertStatement: string = baseInsertStatement + values.join(',\n') + ';\n';

            fs.writeFile(path, insertStatement, {flag: 'a'}, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });

            return Promise.resolve(); 
    }
}