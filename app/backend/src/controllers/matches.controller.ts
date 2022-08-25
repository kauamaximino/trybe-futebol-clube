import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  async allMathces(request: Request, response: Response) {
    const matches = await this.matchesService.allMatches();
    return response.status(200).json(matches);
  }
}
