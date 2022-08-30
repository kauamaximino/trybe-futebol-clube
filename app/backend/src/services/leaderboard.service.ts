import Calculator from '../utils/calculator.leader';
import TeamsService from './teams.service';
import MatchesService from './matches.service';

export default class HomeLeaderboard {
  private teams = new TeamsService();
  private matches = new MatchesService();
  private calcHome = new Calculator();

  results = async (locality: string) => {
    const allTeams = await this.teams.allTeams();
    const matchesFinish = await this.matches.getFinished();

    return this.calcHome.results(locality, allTeams, matchesFinish);
  };
}
