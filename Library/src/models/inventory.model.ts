export interface IInverntoy {
    productId: number;
    distributionCenterId: number;
    size: string;
    color: string;
    quantity: number;
    gender: string;

    
    toString(): string;
}

export class Inventory implements IInverntoy {
    productId: number;
    distributionCenterId: number;
    size: string;
    color: string;
    quantity: number;
    gender: string;

    constructor(pId: number, dcId: number, 
        s: string, c: string, 
        q: number, g: string) {
            this.productId = pId;
            this.distributionCenterId = dcId;
            this.size = s;
            this.color = c;
            this.quantity = q;
            this.gender = g;
        }

    toString = (): string => {
        let result: string = `${this.productId}, ${this.distributionCenterId}, ` +
            `'${this.size}', '${this.color}', ${this.quantity}, '${this.gender}'`;

        return result;
    }
}

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