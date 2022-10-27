import Team from '../database/models/team';

export default class TeamsModel {
  constructor(public team = Team) {
  }

  public async getAll(): Promise<Team[]> {
    const teams = await this.team.findAll();
    return teams;
  }

  public async getById(id: number): Promise<Team | null> {
    const team = await this.team.findOne({ where: { id } });
    return team;
  }
}
