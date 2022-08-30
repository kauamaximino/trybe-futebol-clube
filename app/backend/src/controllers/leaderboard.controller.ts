import { Request, Response } from 'express';
import HomeLeaderService from '../services/leaderboard.service';

export default class HomeLeaderboardController {
  constructor(private homeService = new HomeLeaderService()) { }

  async homeLeaderboard(_request: Request, response: Response) {
    const result = await this.homeService.results();

    return response.status(200).json(result);
  }
}
