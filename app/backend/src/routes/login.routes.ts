import { Router } from 'express';
// import LoginController from '../controllers/loginController';
import verifyEmailAndPassword from '../middlewares/verifcLoginMiddlewares';
import authLogin from '../middlewares/authLoginMiddlewares';
import tokenValidation from '../middlewares/tokenValidationMiddleware';

const router = Router();

// const loginController = new LoginController();

router.post('/login', verifyEmailAndPassword, authLogin);
router.get('/login/validate', tokenValidation);

export default router;
