"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inventory_service_1 = require("./services/inventory.service");
let inventoryService = new inventory_service_1.InventoryService();
// GENETATE DATA FOR INVENTORY TABLE
let productId = 48;
let distributionCenterId = 1;
let sizes = ['small', 'medium', 'large'];
let colors = ['white', 'black', 'red', 'blue', 'green'];
let gender = 'unisex';
console.log('generating insert statements...');
while (productId <= 97) {
    inventoryService.generateInsertStatements(productId, distributionCenterId, sizes, colors, gender);
    productId++;
}
console.log('finished writing insert statements.');
//# sourceMappingURL=index.js.map