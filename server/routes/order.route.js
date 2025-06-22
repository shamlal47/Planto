import { Router } from "express";
import { createOrder, deleteOrder, getOrder, getOrders } from "../controllers/order.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const orderRouter = Router();

orderRouter.post('/create', authorize ,createOrder);
orderRouter.get('/list', getOrders);
orderRouter.get('/details/:id', getOrder);
orderRouter.delete('/delete/:id', deleteOrder);


export default orderRouter;  