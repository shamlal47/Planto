export const chatWithAI = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({
            success: false,
            message: 'Message is required'
        });
    }

    try {
        // Simulate AI response (replace with actual AI service call)
        const aiResponse = `AI Response to: ${message}`;

        res.status(200).json({
            success: true,
            data: aiResponse
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to communicate with AI',
            error: error.message
        });
    }
}