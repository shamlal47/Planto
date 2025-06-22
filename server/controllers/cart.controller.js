import Cart from "../models/cart.model.js";
import { User } from "../models/user.model.js";

export const getCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const cart = await Cart.findOne({ userId }).populate("items.productId");
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};

export const addToCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const { productId, quantity } = req.body;

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            // If item already exists, update the quantity
            cart.items[itemIndex].quantity += quantity;
        } else {
            // If item doesn't exist, add it to the cart
            cart.items.push({ productId, quantity });
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};
export const removeFromCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const { productId } = req.body;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
};
export const clearCart = async (req, res, next) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        await Cart.findOneAndDelete({ userId });
        res.status(200).json({ message: "Cart cleared successfully" });
    } catch (error) {
        next(error);
    }
};
export const updateCartItem = async (req, res, next) => {
    try {
        const userId = req.user.id; // Assuming user ID is stored in req.user
        const { productId, quantity } = req.body;

        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            // If item exists, update the quantity
            cart.items[itemIndex].quantity = quantity;
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: "Item not found in cart" });
        }
    } catch (error) {
        next(error);
    }
};

