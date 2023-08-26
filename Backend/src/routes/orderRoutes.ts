import { Router } from 'express';
import * as orderControllers from './../controllers/orderControllers';

const orderRouter = Router();

orderRouter.route('/').get(orderControllers.getAllOrders);
orderRouter.route('/:orderId').get(orderControllers.getOrderById);
orderRouter.route('/').post(orderControllers.createOrder);
orderRouter.route('/:orderId').put(orderControllers.updateOrder);
orderRouter.route('/:orderId').delete(orderControllers.deleteOrder);

export default orderRouter;
