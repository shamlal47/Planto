import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.put('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User profile of ${userId} updated successfully` });
});
userRouter.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200).json({ message: `User profile of ${userId} deleted successfully` });
});

export default userRouter;