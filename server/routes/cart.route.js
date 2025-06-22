import { Router } from "express";
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
} from "../controllers/cart.controller.js";

const cartRouter = Router();

cartRouter.get('/cart', getCart);
cartRouter.post('/cart/add', addToCart);
cartRouter.put('/cart/update/:itemId', updateCartItem);
cartRouter.delete('/cart/remove/:itemId', removeFromCart);

export default cartRouter;