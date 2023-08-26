import { Router } from 'express';
import * as productControllers from './../controllers/productControllers';

const productRouter = Router();

productRouter.route('/').get(productControllers.getAllProducts);
productRouter.route('/:productId').get(productControllers.getProductById);
productRouter.route('/').post(productControllers.createProduct);
productRouter.route('/:productId').put(productControllers.updateProduct);
productRouter.route('/:productId').delete(productControllers.deleteProduct);

export default productRouter;
