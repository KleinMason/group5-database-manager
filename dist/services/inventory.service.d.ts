export interface IInventoryService {
    generateInsertStatements(productId: number, distributionCenterId: number, sizes: Array<string>, colors: Array<string>, gender: string): Promise<void>;
}
export declare class InventoryService implements IInventoryService {
    constructor();
    private randomService;
    generateInsertStatements: (productId: number, distributionCenterId: number, sizes?: string[], colors?: string[], gender?: string) => Promise<void>;
}
