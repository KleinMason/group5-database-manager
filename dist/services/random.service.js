"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomService = void 0;
class RandomService {
    constructor() {
        this.getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        };
    }
}
exports.RandomService = RandomService;
//# sourceMappingURL=random.service.js.map