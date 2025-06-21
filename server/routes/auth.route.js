import { login, signout, signup } from "../controllers/auth.controller.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post('/signup', signup);
authRouter.post('/login',  login);
authRouter.post('/signout', signout);
export default authRouter;