import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

export default class MatchesController {
  constructor(private matchesService = new MatchesService()) {}

  async allMathces(request: Request, response: Response) {
    const matches = await this.matchesService.allMatches();
    return response.status(200).json(matches);
  }

  async saveMatch(request: Request, response: Response) {
    const dataMatch = request.body;
    try {
      const match = await this.matchesService.saveMatch(dataMatch);
      return response.status(201).json(match);
    } catch ({ message }) {
      let status = 401;

      if (message === 'There is no team with such id!') {
        status = 404;
      }
      return response.status(status).json({ message });
    }
  }

  async updateMatch(request: Request, response: Response) {
    const { id } = request.params;
    const update = await this.matchesService.updateMatch(id);
    return response.status(200).json(update);
  }
}
