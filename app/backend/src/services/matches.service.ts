import Matches from '../database/models/matches';
import Teams from '../database/models/teams';

export default class MatchesService {
  constructor(private model = Matches) {}

  async allMatches() {
    const matches = await this.model.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return matches;
  }
}
