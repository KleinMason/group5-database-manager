"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Inventory {
    constructor(pId, dcId, s, c, q, g) {
        this.toString = () => {
            let result = `${this.productId}, ${this.distributionCenterId}, ` +
                `'${this.size}', '${this.color}', ${this.quantity}, '${this.gender}'`;
            return result;
        };
        this.productId = pId;
        this.distributionCenterId = dcId;
        this.size = s;
        this.color = c;
        this.quantity = q;
        this.gender = g;
    }
}
exports.Inventory = Inventory;
// INSERT INTO `group5`.`Inventory`
// (`inventoryId`,
// `productId`,
// `distributionCenterId`,
// `size`,
// `color`,
// `quantity`,
// `gender`)
// VALUES
// (<{inventoryId: }>,
// <{productId: }>,
// <{distributionCenterId: }>,
// <{size: }>,
// <{color: }>,
// <{quantity: }>,
// <{gender: }>);
//# sourceMappingURL=inventory.model.js.map