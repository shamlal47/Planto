import Order from '../models/order.model.js';

export const createOrder = async (req, res) => {
    try {
        const { items, totalAmount } = req.body;

        // Validate request body
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Items are required and must be an array'
            });
        }

        if (typeof totalAmount !== 'number' || totalAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Total amount must be a positive number'
            });
        }

        // Create new order
        const newOrder = new Order({
            user: req.user.userId, // Assuming userId is set in the request by auth middleware
            items,
            totalAmount
        });

        await newOrder.save();

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            data: newOrder
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create order',
            error: error.message
        });
    }
}

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).populate('items.product');

        res.status(200).json({
            success: true,
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch orders',
            error: error.message
        });
    }
}

export const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.product');

        if (!order || order.user.toString() !== req.user.userId) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch order',
            error: error.message
        });
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order || order.user.toString() !== req.user.userId) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        await order.remove();

        res.status(200).json({
            success: true,
            message: 'Order deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete order',
            error: error.message
        });
    }
}
