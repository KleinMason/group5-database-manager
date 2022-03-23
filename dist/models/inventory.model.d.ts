export interface IInverntoy {
    productId: number;
    distributionCenterId: number;
    size: string;
    color: string;
    quantity: number;
    gender: string;
    toString(): string;
}
export declare class Inventory implements IInverntoy {
    productId: number;
    distributionCenterId: number;
    size: string;
    color: string;
    quantity: number;
    gender: string;
    constructor(pId: number, dcId: number, s: string, c: string, q: number, g: string);
    toString: () => string;
}
