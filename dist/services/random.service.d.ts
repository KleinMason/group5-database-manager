export interface IRandomService {
    getRandomInt(max: number): any;
}
export declare class RandomService implements IRandomService {
    getRandomInt: (max: number) => number;
}
