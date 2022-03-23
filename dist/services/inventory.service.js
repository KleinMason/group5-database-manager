"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
// import { IInverntoy } from "../models/inventory.model";
const random_service_1 = require("./random.service");
const inventory_model_1 = require("../models/inventory.model");
const fs = require("fs");
const __path = require("path");
class InventoryService {
    constructor() {
        this.randomService = new random_service_1.RandomService();
        this.generateInsertStatements = (productId, distributionCenterId, sizes, colors, gender) => {
            console.log(`generating insert statement for productId: ${productId}...`);
            let path = __path.join(__dirname, '../../inventory-inserts.txt');
            let values = [];
            const baseInsertStatement = 'INSERT INTO `Inventory` VALUES\n';
            sizes.forEach(size => {
                colors.forEach(color => {
                    let randQuantity = this.randomService.getRandomInt(50);
                    let inventoryItem = new inventory_model_1.Inventory(productId, distributionCenterId, size, color, randQuantity, gender);
                    values.push("(NULL, " + inventoryItem.toString() + ")");
                });
            });
            let insertStatement = baseInsertStatement + values.join(',\n') + ';\n';
            fs.writeFile(path, insertStatement, { flag: 'a' }, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
            return Promise.resolve();
        };
    }
}
exports.InventoryService = InventoryService;
//# sourceMappingURL=inventory.service.js.map