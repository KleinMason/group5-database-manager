import { Request, Response, Application, Router } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../composition/app.composition.types';
import { RouteError } from '../../models/route-error';
import { IInventoryService } from '../../services/inventory.service';

@injectable()
export class InventoryController {

    private router: Router;

    constructor(
        @inject(TYPES.ExpressApplication) app: Application,
        @inject(TYPES.InventoryService) private inventoryService: IInventoryService) {
        this.router = Router();
        this.router
            .get('/all', this.getAllInventory)
            .get('/:inventoryId', this.getInventory)
        app.use('/api/inventory', this.router);

    }

    getAllInventory = (_req: Request, res: Response, next: any) => {
        return this.inventoryService.getAllInventory()
            .then(inventory => res.json({ inventory }))
            .catch((ex: Error) => next(new RouteError(ex.message, 500)));
    }

    getInventory = (req: Request, res: Response, next: any) => {
        if (!req.params.inventoryId) return next(new RouteError('Inventory id not provided.', 400));
        let inventoryId = parseInt(req.params.inventoryId);
        if (isNaN(inventoryId)) return next(new RouteError('Invalid inventory id.', 400));
        return this.inventoryService.getInventory(inventoryId)
            .then(inventory => res.json(inventory))
            .catch((ex: Error) => next(new RouteError(ex.message, 500)));
    }
}
