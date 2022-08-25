import Teams from '../database/models/teams';

export default class TeamsSerivce {
  constructor(private model = Teams) { }

  async allTeams() {
    const teams = await this.model.findAll();
    return teams;
  }

  async teamID(id: number) {
    const team = await this.model.findOne({ where: { id } });
    return team;
  }
}
