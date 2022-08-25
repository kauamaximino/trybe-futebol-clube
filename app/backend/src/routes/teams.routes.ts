import * as express from 'express';
import TeamsController from '../controllers/teams.controller';

const teams = express.Router();

const controller = new TeamsController();

teams.get('/teams', (request, response) => controller.allTeams(request, response));
teams.get('/teams/:id', (request, response) => controller.teamID(request, response));

export default teams;
