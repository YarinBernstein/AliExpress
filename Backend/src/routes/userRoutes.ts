import { Router } from 'express';
import * as authControllers from './../controllers/authControllers';
import * as userControllers from './../controllers/userControllers';

const userRouter = Router();

userRouter.route('/signup').post(authControllers.signUp);

userRouter
	.route('/login')
	.post(authControllers.login)
	.get(authControllers.protect, userControllers.getUser);

userRouter.route('/all').get(userControllers.getUsers);

export default userRouter;
