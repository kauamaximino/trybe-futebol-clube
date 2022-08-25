import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

export default class TeamsController {
  private teamsService = new TeamsService();

  async allTeams(_request: Request, response: Response) {
    const teams = await this.teamsService.allTeams();
    return response.status(200).json(teams);
  }

  async teamID(request: Request, response: Response) {
    const { id } = request.params;
    const team = await this.teamsService.teamID(+id);
    return response.status(200).json(team);
  }
}
