import { InventoryService } from "./services/inventory.service";

let inventoryService = new InventoryService();

// GENETATE DATA FOR INVENTORY TABLE
let productId: number = 141;
let distributionCenterId: number = 1;
let sizes: string[] = ['small', 'medium', 'large'];
let colors: string[] = ['white', 'black'];
let gender: string = 'male';

inventoryService.generateInsertStatements(productId, distributionCenterId, sizes, colors, gender);