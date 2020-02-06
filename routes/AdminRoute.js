import express from 'express';
import AdminController from '../controllers/AdminController';
const router = express.Router();

router.post('/signup', AdminController.signup);
router.post('/login', AdminController.login);

export default router;
