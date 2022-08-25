import * as express from 'express';
import login from './login.routes';
import teams from './teams.routes';
import matches from './matches.routes';

const router = express.Router();

router.use(login);
router.use(teams);
router.use(matches);

export default router;
