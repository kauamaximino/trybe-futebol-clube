import Matches from '../database/models/matches';
import Teams from '../database/models/teams';
import IMatchInProgress from '../interfaces/inProgress.interface';

export default class MatchesService {
  constructor(private model = Matches) {}

  async allMatches() {
    const matches = await this.model.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
    return matches;
  }

  async saveMatch(match: IMatchInProgress) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = match;
    const home = await this.model.findOne({ where: { homeTeam } });
    const away = await this.model.findOne({ where: { awayTeam } });

    if (homeTeam === awayTeam) {
      throw new Error('It is not possible to create a match with two equal teams');
    }

    if (!home || !away) throw new Error('There is no team with such id!');

    const matchSave = await this.model.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true,
    });
    return matchSave;
  }

  async updateMatch(id: string) {
    await this.model.update({ inProgress: false }, { where: { id } });
    const update = { message: 'Finished' };
    return update;
  }

  async updateMatchId(goals: IMatchInProgress, id: number) {
    const { homeTeamGoals, awayTeamGoals } = goals;
    const matchProgress = await this.model.findOne({ where: { id } });
    if (matchProgress?.inProgress) {
      await this.model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
      return this.model.findOne({ where: { id } });
    }
  }

  async getFinished() {
    const finished = await this.model.findAll({ where: { inProgress: false } });
    return finished;
  }
}
