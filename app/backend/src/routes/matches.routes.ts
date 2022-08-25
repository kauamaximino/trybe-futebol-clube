import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

const matches = express.Router();

const controller = new MatchesController();

matches.get('/matches', (request, response) => controller.allMathces(request, response));

export default matches;
