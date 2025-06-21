import { Router } from "express";

const userRouter = Router();
userRouter.get('/', (req, res) => {
    res.status(200).json({ message: "User profile fetched successfully" });
});
userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User profile of ${userId} fetched successfully` });
});
userRouter.put('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User profile of ${userId} updated successfully` });
});
userRouter.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User profile of ${userId} deleted successfully` });
});

export default userRouter;