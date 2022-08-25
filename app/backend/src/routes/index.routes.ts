import * as express from 'express';
import login from './login.routes';
import teams from './teams.routes';

const router = express.Router();

router.use(login);
router.use(teams);

export default router;
