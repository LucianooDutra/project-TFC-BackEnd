import { IMatches, ISimpleMatches } from '../interfaces/index';
import Matche from '../database/models/matche';
import Team from '../database/models/team';

export default class TeamsModel {
  constructor(public match = Matche) {
  }

  public async getAll(): Promise<Matche[]> {
    const matches = await this.match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  public async getMatchesByProgress(inProgress: boolean): Promise<Matche[]> {
    const matches = await this.match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
      where: { inProgress },
    });
    return matches;
  }

  public async createMatch(match: IMatches): Promise<Matche> {
    const newMatch = await this.match.create({ ...match, inProgress: true });

    return newMatch;
  }

  public async updateIsFinished(id: number) {
    await this.match.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  public async updateMatches(body:ISimpleMatches, id: number) {
    const { awayTeamGoals, homeTeamGoals } = body;
    await this.match.update(
      { awayTeamGoals, homeTeamGoals },
      { where: { id } },
    );
  }
}
