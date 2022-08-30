import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboard.service';

export default class HomeLeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) { }

  async homeLeaderboard(_request: Request, response: Response) {
    const result = await this.leaderboardService.results('home');

    return response.status(200).json(result);
  }

  async awayLeaderboard(_request: Request, response: Response) {
    const result = await this.leaderboardService.results('away');

    return response.status(200).json(result);
  }
}
