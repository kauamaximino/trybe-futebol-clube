import * as express from 'express';
import MatchesController from '../controllers/matches.controller';
import middlewares from '../middlewares/index.validate';

const matches = express.Router();

const controller = new MatchesController();

matches.get('/matches', (request, response) => controller.allMathces(request, response));

matches.post(
  '/matches',
  middlewares.jwt,
  (request, response) => controller.saveMatch(request, response),
);

matches.patch(
  '/matches/:id/finish',
  (request, response) => controller.updateMatch(request, response),
);

matches.patch('/matches/:id', (request, response) => controller.updateMatchId(request, response));

export default matches;
