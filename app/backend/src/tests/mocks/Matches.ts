const matches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: "São Paulo"
    },
    teamAway: {
      teamName: "Grêmio"
    }
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: true,
    teamHome: {
      teamName: "Internacional"
    },
    teamAway: {
      teamName: "Santos"
    }
  },
];

const matchesIsFinished = [
  {
    "id": 1,
    "homeTeam": 5,
    "homeTeamGoals": 1,
    "awayTeam": 13,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "Cruzeiro"
    },
    "teamAway": {
      "teamName": "Real Brasília"
    }
  },
  {
    "id": 2,
    "homeTeam": 12,
    "homeTeamGoals": 2,
    "awayTeam": 6,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Palmeiras"
    },
    "teamAway": {
      "teamName": "Ferroviária"
    }
  },
  {
    "id": 3,
    "homeTeam": 15,
    "homeTeamGoals": 0,
    "awayTeam": 1,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
      "teamName": "São José-SP"
    },
    "teamAway": {
      "teamName": "Avaí/Kindermann"
    }
  },
  {
    "id": 4,
    "homeTeam": 1,
    "homeTeamGoals": 0,
    "awayTeam": 12,
    "awayTeamGoals": 3,
    "inProgress": false,
    "teamHome": {
      "teamName": "Avaí/Kindermann"
    },
    "teamAway": {
      "teamName": "Palmeiras"
    }
  },
  {
    "id": 5,
    "homeTeam": 2,
    "homeTeamGoals": 0,
    "awayTeam": 9,
    "awayTeamGoals": 2,
    "inProgress": false,
    "teamHome": {
      "teamName": "Bahia"
    },
    "teamAway": {
      "teamName": "Internacional"
    }
  },
];

const creatMatche = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 2,
    "awayTeam": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
  }
];

const sendNewMatch = {
  homeTeam: 1,
  awayTeam: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true, 
};

const sendNewMatchIfEqualTeams = {
  homeTeam: 2,
  awayTeam: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true, 
};

const sendNewMatchIfIdNonexistent = {
  homeTeam: 99,
  awayTeam: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true, 
};

const sendUpdateMatch = {
  homeTeamGoals: 4,
  awayTeamGoals: 2,
};

export {
  matches,
  matchesIsFinished,
  creatMatche,
  sendNewMatch,
  sendNewMatchIfEqualTeams,
  sendNewMatchIfIdNonexistent,
  sendUpdateMatch,
}