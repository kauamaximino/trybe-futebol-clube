import Table from '../interfaces/table.interface';
import { IFinished, ITableData } from '../interfaces/leaderboard.interface';
import Teams from '../database/models/teams';

export default class Calculator {
  private table: Table = {
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };

  results = async (locality: string, allTeams: Teams[], matchesFinish: IFinished[]) => {
    const table: ITableData[] = allTeams.map((team: Teams) => {
      this.clearTable();
      this.table.name = team.teamName;
      this.calculator(locality, team, matchesFinish);
      return { ...this.table };
    });
    table.sort((a, b) => b.totalPoints - a.totalPoints);
    return this.classification(table);
  };

  calculator = (locality: string, team: Teams, matches: IFinished[]) => {
    if (locality === 'home') {
      matches.forEach((match: IFinished) => {
        if (team.id === match.homeTeam) {
          this.calcHome(match);
        }
      });
    }
    if (locality === 'away') {
      matches.forEach((match: IFinished) => {
        if (team.id === match.awayTeam) {
          this.calcAway(match);
        }
      });
    }
    if (locality === 'all') this.calcGeneral(team, matches);
  };

  calcHome = (match: IFinished) => {
    this.table.totalGames += 1;
    this.table.totalVictories += match.homeTeamGoals > match.awayTeamGoals ? 1 : 0;
    this.table.totalDraws += match.homeTeamGoals === match.awayTeamGoals ? 1 : 0;
    this.table.totalLosses += match.homeTeamGoals < match.awayTeamGoals ? 1 : 0;
    this.table.totalPoints = (this.table.totalVictories * 3) + this.table.totalDraws;
    this.table.goalsFavor += match.homeTeamGoals;
    this.table.goalsOwn += match.awayTeamGoals;
    this.table.goalsBalance = this.table.goalsFavor - this.table.goalsOwn;
    this.table.efficiency = Number(
      ((this.table.totalPoints / (this.table.totalGames * 3)) * 100).toFixed(2),
    );
  };

  calcAway = (match: IFinished) => {
    this.table.totalGames += 1;
    this.table.totalVictories += match.homeTeamGoals < match.awayTeamGoals ? 1 : 0;
    this.table.totalDraws += match.homeTeamGoals === match.awayTeamGoals ? 1 : 0;
    this.table.totalLosses += match.homeTeamGoals > match.awayTeamGoals ? 1 : 0;
    this.table.totalPoints = (this.table.totalVictories * 3) + this.table.totalDraws;
    this.table.goalsFavor += match.awayTeamGoals;
    this.table.goalsOwn += match.homeTeamGoals;
    this.table.goalsBalance = this.table.goalsFavor - this.table.goalsOwn;
    this.table.efficiency = Number(
      ((this.table.totalPoints / (this.table.totalGames * 3)) * 100).toFixed(2),
    );
  };

  calcGeneral = (team: Teams, matches: IFinished[]) => {
    matches.forEach((match: IFinished) => {
      if (team.id === match.homeTeam) {
        this.calcHome(match);
      } else if (team.id === match.awayTeam) {
        this.calcAway(match);
      }
    });
  };

  classification = async (table: ITableData[]) =>
    table.sort((a, b) => {
      if (b.totalPoints === a.totalPoints) {
        if (b.totalVictories === a.totalVictories
          && b.goalsBalance === a.goalsBalance
          && b.goalsFavor === a.goalsFavor) {
          return a.goalsOwn - b.goalsOwn;
        }
        if (b.totalVictories === a.totalVictories
          && b.goalsBalance === a.goalsBalance) {
          return b.goalsFavor - a.goalsFavor;
        }
        if (b.totalVictories === a.totalVictories) {
          return b.goalsBalance - a.goalsBalance;
        }
      }
      return b.totalVictories - a.totalVictories;
    });

  clearTable = () => {
    this.table.name = '';
    this.table.totalPoints = 0;
    this.table.totalGames = 0;
    this.table.totalVictories = 0;
    this.table.totalDraws = 0;
    this.table.totalLosses = 0;
    this.table.goalsFavor = 0;
    this.table.goalsOwn = 0;
    this.table.goalsBalance = 0;
    this.table.efficiency = 0;
  };
}

// ver se passa no GitHub
