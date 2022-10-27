import TeamsServices from './teamsService';
import MatchesServices from './matchesService';
import { IMatches, ITeam, IBoard } from '../interfaces/index';

type homeOrAway = 'homeTeam' | 'awayTeam' | 'homeTeamGoals';

export default class LeaderBoardService {
  public matchesFilter: IMatches[];

  constructor(
    public teams = new TeamsServices(),
    public matches = new MatchesServices(),
  ) { }

  public totalPoints(team: ITeam):number {
    let points = 0;
    this.matchesFilter.forEach((match) => {
      if (team.id === match.homeTeam) {
        if (match.homeTeamGoals > match.awayTeamGoals) points += 3;
        if (match.homeTeamGoals === match.awayTeamGoals) points += 1;
      }
      if (team.id === match.awayTeam) {
        if (match.homeTeamGoals < match.awayTeamGoals) points += 3;
        if (match.homeTeamGoals === match.awayTeamGoals) points += 1;
      }
    });
    return points;
  }

  public totalGames(team: ITeam):number {
    let games = 0;
    this.matchesFilter.forEach((match) => {
      if (match.awayTeam === team.id || match.homeTeam === team.id) games += 1;
    });
    return games;
  }

  public totalVictories(team: ITeam):number {
    let victories = 0;
    this.matchesFilter.forEach((match) => {
      if (team.id === match.awayTeam
        && match.homeTeamGoals < match.awayTeamGoals) victories += 1;
      if (team.id === match.homeTeam
        && match.homeTeamGoals > match.awayTeamGoals) victories += 1;
    });
    return victories;
  }

  public totalDraws():number {
    let draws = 0;
    this.matchesFilter.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals) draws += 1;
    });
    return draws;
  }

  public totalLosses(team: ITeam):number {
    let losses = 0;
    this.matchesFilter.forEach((match) => {
      if (team.id === match.awayTeam
        && match.homeTeamGoals > match.awayTeamGoals) losses += 1;
      if (team.id === match.homeTeam
        && match.homeTeamGoals < match.awayTeamGoals) losses += 1;
    });
    return losses;
  }

  public goalsFavor(team: ITeam):number {
    let goals = 0;
    this.matchesFilter.forEach((match) => {
      if (team.id === match.awayTeam
        && match.awayTeam === team.id) goals += match.awayTeamGoals;
      if (team.id === match.homeTeam
        && match.homeTeam === team.id) goals += match.homeTeamGoals;
    });
    return goals;
  }

  public goalsOwn(team: ITeam):number {
    let goals = 0;
    this.matchesFilter.forEach((match) => {
      if (team.id === match.awayTeam
        && match.awayTeam === team.id) goals += match.homeTeamGoals;
      if (team.id === match.homeTeam
        && match.homeTeam === team.id) goals += match.awayTeamGoals;
    });
    return goals;
  }

  public goalsBalance(team: ITeam):number {
    const goalsFavor = this.goalsFavor(team);
    const goalsOwn = this.goalsOwn(team);
    const total = goalsFavor - goalsOwn;
    return total;
  }

  public efficiency(team: ITeam):string {
    const points = this.totalPoints(team);
    const games = this.totalGames(team);
    return ((points / (games * 3)) * 100).toFixed(2);
  }

  public async getHomeOrAway(homeOrAway: homeOrAway, matchesFinished: IMatches[]) {
    const allTeams = await this.teams.getAll();
    return allTeams.map((team) => {
      const matchesFilter = matchesFinished.filter((match) => match[homeOrAway] === team.id);
      this.matchesFilter = matchesFilter;
      return {
        name: team.teamName,
        totalPoints: this.totalPoints(team),
        totalGames: this.totalGames(team),
        totalVictories: this.totalVictories(team),
        totalDraws: this.totalDraws(),
        totalLosses: this.totalLosses(team),
        goalsFavor: this.goalsFavor(team),
        goalsOwn: this.goalsOwn(team),
        goalsBalance: this.goalsBalance(team),
        efficiency: this.efficiency(team),
      };
    });
  }

  public async getHomeAndAway(matchesFinished: IMatches[], allTeams: ITeam[]) {
    return allTeams.map((team) => {
      const matchesFilter = matchesFinished.filter((match) => match.awayTeam === team.id
      || match.homeTeam === team.id);
      this.matchesFilter = matchesFilter;
      return {
        name: team.teamName,
        totalPoints: this.totalPoints(team),
        totalGames: this.totalGames(team),
        totalVictories: this.totalVictories(team),
        totalDraws: this.totalDraws(),
        totalLosses: this.totalLosses(team),
        goalsFavor: this.goalsFavor(team),
        goalsOwn: this.goalsOwn(team),
        goalsBalance: this.goalsBalance(team),
        efficiency: this.efficiency(team),
      };
    });
  }

  public async generateStatistic(homeOrAway: homeOrAway): Promise<IBoard[] | void> {
    const matchesFinished = await this.matches.getMatchesByProgress(false);
    const allTeams = await this.teams.getAll();

    let resultStatistic;

    if (homeOrAway === 'homeTeam' || 'awayTeam') {
      resultStatistic = await this.getHomeOrAway(homeOrAway, matchesFinished);
    }
    if (homeOrAway === 'homeTeamGoals') {
      resultStatistic = this.getHomeAndAway(matchesFinished, allTeams);
    }

    return resultStatistic;
  }

  public classification = async (statistics: any): Promise<IBoard[]> => {
    const classification = statistics.sort((a: IBoard, b: IBoard) => b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);
    return classification;
  };

  public async leaderBoard(homeOrAway: homeOrAway): Promise<IBoard[]> {
    const getStatistics = await this.generateStatistic(homeOrAway);
    const result = await this.classification(getStatistics);

    return result;
  }
}
