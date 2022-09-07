import express from 'express';
import { Login, Register } from '../controllers/AuthController.js';

const Routes = express.Router();
// @route Post api/users

Routes.post('/login', Login);
Routes.post('/register', Register);
export default Routes;
