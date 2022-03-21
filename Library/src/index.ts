import { InventoryService } from "./services/inventory.service";

let inventoryService = new InventoryService();

// GENETATE DATA FOR INVENTORY TABLE
let productId: number = 48;
let distributionCenterId: number = 1;
let sizes: string[] = ['small', 'medium', 'large'];
let colors: string[] = ['white', 'black', 'red', 'blue', 'green'];
let gender: string = 'unisex';

console.log('generating insert statements...')

while (productId <= 97) {
    inventoryService.generateInsertStatements(productId, distributionCenterId, sizes, colors, gender);
    productId++;
}

console.log('finished writing insert statements.')