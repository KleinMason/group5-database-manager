import { Request, Response, Application, Router } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../composition/app.composition.types';
import { RouteError } from '../../models/route-error';
import { IProductService } from '../../services/product.service';

@injectable()
export class ProductController {

    private router: Router;

    constructor(
        @inject(TYPES.ExpressApplication) app: Application,
        @inject(TYPES.ProductService) private productService: IProductService) {
        this.router = Router();
        this.router
            .get('/all', this.getAllProduct)
            .get('/:productId', this.getProduct)
        app.use('/api/product', this.router);

    }

    getAllProduct = (_req: Request, res: Response, next: any) => {
        return this.productService.getAllProduct()
            .then(product => res.json({ product }))
            .catch((ex: Error) => next(new RouteError(ex.message, 500)));
    }

    getProduct = (req: Request, res: Response, next: any) => {
        if (!req.params.productId) return next(new RouteError('Product id not provided.', 400));
        let productId = parseInt(req.params.productId);
        if (isNaN(productId)) return next(new RouteError('Invalid product id.', 400));
        return this.productService.getProduct(productId)
            .then(product => res.json(product))
            .catch((ex: Error) => next(new RouteError(ex.message, 500)));
    }
}