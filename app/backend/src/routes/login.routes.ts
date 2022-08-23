import * as express from 'express';
import LoginController from '../controllers/login.controller';

const login = express.Router();

const controller = new LoginController();

login.post('/', (request, response) => controller.login(request, response));

export default login;
