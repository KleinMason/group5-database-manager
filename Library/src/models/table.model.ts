export interface ITable {
    generateInsertStatement: () => Promise<void>;
}