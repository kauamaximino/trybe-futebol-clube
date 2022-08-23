import * as express from 'express';
import LoginController from '../controllers/login.controller';
import middlewares from '../middlewares/index.validate';

const login = express.Router();

const controller = new LoginController();

login.post('/login', middlewares.login, (request, response) => controller.login(request, response));

login.get('/login/validate', middlewares.jwt, (req, res) => LoginController.validate(req, res));

export default login;
