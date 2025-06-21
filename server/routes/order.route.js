import { Router } from "express";

const orderRouter = Router();
orderRouter.post('/create', (req, res) => {
    res.status(201).json({ message: "Order created successfully" });
});
orderRouter.get('/list', (req, res) => {
    res.status(200).json({ message: "List of orders" });
});
orderRouter.get('/details/:id', (req, res) => {
    const orderId = req.params.id;
    res.status(200).json({ message: `Details of order ${orderId}` });
});

export default orderRouter;