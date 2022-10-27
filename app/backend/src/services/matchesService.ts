import MatchesModel from '../models/matchesModel';
import { IMatches, ISimpleMatches } from '../interfaces/index';

export default class MatchesService {
  constructor(public matchesModel = new MatchesModel()) { }

  public async getAll(): Promise<IMatches[]> {
    const matches = await this.matchesModel.getAll();

    return matches;
  }

  public async getMatchesByProgress(progress: boolean): Promise<IMatches[]> {
    const matches = await this.matchesModel.getMatchesByProgress(progress);

    return matches;
  }

  public async createMatch(match: IMatches): Promise<IMatches> {
    const newMatch = await this.matchesModel.createMatch(match);

    return newMatch;
  }

  public async updateIsFinished(id:number) {
    await this.matchesModel.updateIsFinished(id);
  }

  public async updateMatches(body:ISimpleMatches, id:number) {
    await this.matchesModel.updateMatches(body, id);
  }
}
