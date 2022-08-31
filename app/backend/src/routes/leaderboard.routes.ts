import * as express from 'express';
import LeaderboardController from '../controllers/leaderboard.controller';

const leaderboard = express.Router();

const controller = new LeaderboardController();

leaderboard.get(
  '/leaderboard/home',
  (request, response) => controller.homeLeaderboard(request, response),
);

leaderboard.get(
  '/leaderboard/away',
  (request, response) => controller.awayLeaderboard(request, response),
);

leaderboard.get(
  '/leaderboard',
  (request, response) => controller.generalLeaderboard(request, response),
);

export default leaderboard;
