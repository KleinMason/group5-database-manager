export interface IRandomService {
    getRandomInt(max: number);
}

export class RandomService implements IRandomService {
    
    getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
      }
}