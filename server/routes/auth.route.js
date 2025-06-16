import { Route } from "express";

const authRouter = Route();

authRouter.post('/signup', (req, res) => {
    res.status(201).json({ message: "User signed up successfully" });
});
authRouter.post(('/signin'), (req, res) => {
    res.status(200).json({ message: "User signed in successfully" });
});
authRouter.post('/signout', (req, res) => {
    res.status(200).json({ message: "User signed out successfully" });
});

export default authRouter;