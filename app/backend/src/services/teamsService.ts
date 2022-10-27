import TeamsModel from '../models/teamsModel';
import { ITeam } from '../interfaces/index';

export default class TeamsService {
  constructor(public teamsModel = new TeamsModel()) { }

  public async getAll(): Promise<ITeam[]> {
    const teams = await this.teamsModel.getAll();

    return teams;
  }

  public async getById(id: number): Promise<ITeam | null> {
    const team = await this.teamsModel.getById(id);

    return team;
  }
}
