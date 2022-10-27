const mockLeaderboardHome = [
  {
    "name": "Santos",
    "totalPoints": 9,
    "totalGames": 3,
    "totalVictories": 3,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 9,
    "goalsOwn": 3,
    "goalsBalance": 6,
    "efficiency": "100.00"
  },
  {
    "name": "Palmeiras",
    "totalPoints": 7,
    "totalGames": 3,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 10,
    "goalsOwn": 5,
    "goalsBalance": 5,
    "efficiency": "77.78"
  },
  {
    "name": "Corinthians",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 6,
    "goalsOwn": 1,
    "goalsBalance": 5,
    "efficiency": "100.00"
  },
  {
    "name": "Grêmio",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 4,
    "goalsOwn": 1,
    "goalsBalance": 3,
    "efficiency": "100.00"
  },
  {
    "name": "Real Brasília",
    "totalPoints": 6,
    "totalGames": 2,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 0,
    "goalsFavor": 2,
    "goalsOwn": 0,
    "goalsBalance": 2,
    "efficiency": "100.00"
  },
  {
    "name": "São Paulo",
    "totalPoints": 4,
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 4,
    "goalsOwn": 1,
    "goalsBalance": 3,
    "efficiency": "66.67"
  },
  {
    "name": "Internacional",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 4,
    "goalsOwn": 6,
    "goalsBalance": -2,
    "efficiency": "44.44"
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 4,
    "totalGames": 4,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsFavor": 4,
    "goalsOwn": 6,
    "goalsBalance": -2,
    "efficiency": "33.33"
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalGames": 3,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 2,
    "goalsOwn": 4,
    "goalsBalance": -2,
    "efficiency": "44.44"
  },
  {
    "name": "Ferroviária",
    "totalPoints": 3,
    "totalGames": 2,
    "totalVictories": 1,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 3,
    "goalsOwn": 2,
    "goalsBalance": 1,
    "efficiency": "50.00"
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 2,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 2,
    "goalsOwn": 2,
    "goalsBalance": 0,
    "efficiency": "33.33"
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 1,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 2,
    "goalsOwn": 3,
    "goalsBalance": -1,
    "efficiency": "16.67"
  },
  {
    "name": "Flamengo",
    "totalPoints": 1,
    "totalGames": 2,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 1,
    "goalsOwn": 2,
    "goalsBalance": -1,
    "efficiency": "16.67"
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 1,
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 1,
    "totalLosses": 2,
    "goalsFavor": 3,
    "goalsOwn": 7,
    "goalsBalance": -4,
    "efficiency": "11.11"
  },
  {
    "name": "São José-SP",
    "totalPoints": 0,
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 2,
    "goalsOwn": 5,
    "goalsBalance": -3,
    "efficiency": "0.00"
  },
  {
    "name": "Bahia",
    "totalPoints": 0,
    "totalGames": 3,
    "totalVictories": 0,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 0,
    "goalsOwn": 4,
    "goalsBalance": -4,
    "efficiency": "0.00"
  }
];

const matchesIsFinished = [
  {
  "id": 1,
  "homeTeam": 16,
  "homeTeamGoals": 1,
  "awayTeam": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "São Paulo"
  },
  "teamAway": {
  "teamName": "Grêmio"
  }
  },
  {
  "id": 2,
  "homeTeam": 9,
  "homeTeamGoals": 1,
  "awayTeam": 14,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Internacional"
  },
  "teamAway": {
  "teamName": "Santos"
  }
  },
  {
  "id": 3,
  "homeTeam": 4,
  "homeTeamGoals": 3,
  "awayTeam": 11,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Corinthians"
  },
  "teamAway": {
  "teamName": "Napoli-SC"
  }
  },
  {
  "id": 4,
  "homeTeam": 3,
  "homeTeamGoals": 0,
  "awayTeam": 2,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Botafogo"
  },
  "teamAway": {
  "teamName": "Bahia"
  }
  },
  {
  "id": 5,
  "homeTeam": 7,
  "homeTeamGoals": 1,
  "awayTeam": 10,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Flamengo"
  },
  "teamAway": {
  "teamName": "Minas Brasília"
  }
  },
  {
  "id": 6,
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
  "id": 7,
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
  "id": 8,
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
  "id": 9,
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
  "id": 10,
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
  {
  "id": 11,
  "homeTeam": 13,
  "homeTeamGoals": 1,
  "awayTeam": 3,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Real Brasília"
  },
  "teamAway": {
  "teamName": "Botafogo"
  }
  },
  {
  "id": 12,
  "homeTeam": 6,
  "homeTeamGoals": 0,
  "awayTeam": 4,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Ferroviária"
  },
  "teamAway": {
  "teamName": "Corinthians"
  }
  },
  {
  "id": 13,
  "homeTeam": 8,
  "homeTeamGoals": 2,
  "awayTeam": 5,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Grêmio"
  },
  "teamAway": {
  "teamName": "Cruzeiro"
  }
  },
  {
  "id": 14,
  "homeTeam": 14,
  "homeTeamGoals": 2,
  "awayTeam": 16,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Santos"
  },
  "teamAway": {
  "teamName": "São Paulo"
  }
  },
  {
  "id": 15,
  "homeTeam": 10,
  "homeTeamGoals": 0,
  "awayTeam": 15,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Minas Brasília"
  },
  "teamAway": {
  "teamName": "São José-SP"
  }
  },
  {
  "id": 16,
  "homeTeam": 11,
  "homeTeamGoals": 0,
  "awayTeam": 7,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Napoli-SC"
  },
  "teamAway": {
  "teamName": "Flamengo"
  }
  },
  {
  "id": 17,
  "homeTeam": 1,
  "homeTeamGoals": 2,
  "awayTeam": 8,
  "awayTeamGoals": 3,
  "inProgress": false,
  "teamHome": {
  "teamName": "Avaí/Kindermann"
  },
  "teamAway": {
  "teamName": "Grêmio"
  }
  },
  {
  "id": 18,
  "homeTeam": 12,
  "homeTeamGoals": 4,
  "awayTeam": 5,
  "awayTeamGoals": 2,
  "inProgress": false,
  "teamHome": {
  "teamName": "Palmeiras"
  },
  "teamAway": {
  "teamName": "Cruzeiro"
  }
  },
  {
  "id": 19,
  "homeTeam": 11,
  "homeTeamGoals": 2,
  "awayTeam": 2,
  "awayTeamGoals": 2,
  "inProgress": false,
  "teamHome": {
  "teamName": "Napoli-SC"
  },
  "teamAway": {
  "teamName": "Bahia"
  }
  },
  {
  "id": 20,
  "homeTeam": 7,
  "homeTeamGoals": 0,
  "awayTeam": 9,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Flamengo"
  },
  "teamAway": {
  "teamName": "Internacional"
  }
  },
  {
  "id": 21,
  "homeTeam": 6,
  "homeTeamGoals": 3,
  "awayTeam": 13,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Ferroviária"
  },
  "teamAway": {
  "teamName": "Real Brasília"
  }
  },
  {
  "id": 22,
  "homeTeam": 4,
  "homeTeamGoals": 3,
  "awayTeam": 3,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Corinthians"
  },
  "teamAway": {
  "teamName": "Botafogo"
  }
  },
  {
  "id": 23,
  "homeTeam": 15,
  "homeTeamGoals": 2,
  "awayTeam": 16,
  "awayTeamGoals": 3,
  "inProgress": false,
  "teamHome": {
  "teamName": "São José-SP"
  },
  "teamAway": {
  "teamName": "São Paulo"
  }
  },
  {
  "id": 24,
  "homeTeam": 10,
  "homeTeamGoals": 2,
  "awayTeam": 14,
  "awayTeamGoals": 2,
  "inProgress": false,
  "teamHome": {
  "teamName": "Minas Brasília"
  },
  "teamAway": {
  "teamName": "Santos"
  }
  },
  {
  "id": 25,
  "homeTeam": 2,
  "homeTeamGoals": 0,
  "awayTeam": 6,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Bahia"
  },
  "teamAway": {
  "teamName": "Ferroviária"
  }
  },
  {
  "id": 26,
  "homeTeam": 13,
  "homeTeamGoals": 1,
  "awayTeam": 1,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Real Brasília"
  },
  "teamAway": {
  "teamName": "Avaí/Kindermann"
  }
  },
  {
  "id": 27,
  "homeTeam": 5,
  "homeTeamGoals": 1,
  "awayTeam": 15,
  "awayTeamGoals": 2,
  "inProgress": false,
  "teamHome": {
  "teamName": "Cruzeiro"
  },
  "teamAway": {
  "teamName": "São José-SP"
  }
  },
  {
  "id": 28,
  "homeTeam": 16,
  "homeTeamGoals": 3,
  "awayTeam": 7,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "São Paulo"
  },
  "teamAway": {
  "teamName": "Flamengo"
  }
  },
  {
  "id": 29,
  "homeTeam": 9,
  "homeTeamGoals": 0,
  "awayTeam": 4,
  "awayTeamGoals": 4,
  "inProgress": false,
  "teamHome": {
  "teamName": "Internacional"
  },
  "teamAway": {
  "teamName": "Corinthians"
  }
  },
  {
  "id": 30,
  "homeTeam": 3,
  "homeTeamGoals": 0,
  "awayTeam": 12,
  "awayTeamGoals": 4,
  "inProgress": false,
  "teamHome": {
  "teamName": "Botafogo"
  },
  "teamAway": {
  "teamName": "Palmeiras"
  }
  },
  {
  "id": 31,
  "homeTeam": 8,
  "homeTeamGoals": 2,
  "awayTeam": 10,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Grêmio"
  },
  "teamAway": {
  "teamName": "Minas Brasília"
  }
  },
  {
  "id": 32,
  "homeTeam": 14,
  "homeTeamGoals": 5,
  "awayTeam": 11,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Santos"
  },
  "teamAway": {
  "teamName": "Napoli-SC"
  }
  },
  {
  "id": 33,
  "homeTeam": 1,
  "homeTeamGoals": 1,
  "awayTeam": 16,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Avaí/Kindermann"
  },
  "teamAway": {
  "teamName": "São Paulo"
  }
  },
  {
  "id": 34,
  "homeTeam": 9,
  "homeTeamGoals": 3,
  "awayTeam": 6,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Internacional"
  },
  "teamAway": {
  "teamName": "Ferroviária"
  }
  },
  {
  "id": 35,
  "homeTeam": 10,
  "homeTeamGoals": 1,
  "awayTeam": 5,
  "awayTeamGoals": 3,
  "inProgress": false,
  "teamHome": {
  "teamName": "Minas Brasília"
  },
  "teamAway": {
  "teamName": "Cruzeiro"
  }
  },
  {
  "id": 36,
  "homeTeam": 2,
  "homeTeamGoals": 0,
  "awayTeam": 7,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Bahia"
  },
  "teamAway": {
  "teamName": "Flamengo"
  }
  },
  {
  "id": 37,
  "homeTeam": 15,
  "homeTeamGoals": 0,
  "awayTeam": 13,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "São José-SP"
  },
  "teamAway": {
  "teamName": "Real Brasília"
  }
  },
  {
  "id": 38,
  "homeTeam": 14,
  "homeTeamGoals": 2,
  "awayTeam": 4,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Santos"
  },
  "teamAway": {
  "teamName": "Corinthians"
  }
  },
  {
  "id": 39,
  "homeTeam": 3,
  "homeTeamGoals": 2,
  "awayTeam": 11,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Botafogo"
  },
  "teamAway": {
  "teamName": "Napoli-SC"
  }
  },
  {
  "id": 40,
  "homeTeam": 12,
  "homeTeamGoals": 4,
  "awayTeam": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
  "teamHome": {
  "teamName": "Palmeiras"
  },
  "teamAway": {
  "teamName": "Grêmio"
  }
  },
  {
  "id": 49,
  "homeTeam": 10,
  "homeTeamGoals": 1,
  "awayTeam": 6,
  "awayTeamGoals": 0,
  "inProgress": false,
  "teamHome": {
  "teamName": "Minas Brasília"
  },
  "teamAway": {
  "teamName": "Ferroviária"
  }
  }
  ]

  const mockLeaderboardAway = [
    {
      "name": "Palmeiras",
      "totalPoints": 6,
      "totalGames": 2,
      "totalVictories": 2,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 7,
      "goalsOwn": 0,
      "goalsBalance": 7,
      "efficiency": "100.00"
    },
    {
      "name": "Corinthians",
      "totalPoints": 6,
      "totalGames": 3,
      "totalVictories": 2,
      "totalDraws": 0,
      "totalLosses": 1,
      "goalsFavor": 6,
      "goalsOwn": 2,
      "goalsBalance": 4,
      "efficiency": "66.67"
    },
    {
      "name": "Internacional",
      "totalPoints": 6,
      "totalGames": 2,
      "totalVictories": 2,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 3,
      "goalsOwn": 0,
      "goalsBalance": 3,
      "efficiency": "100.00"
    },
    {
      "name": "São José-SP",
      "totalPoints": 6,
      "totalGames": 2,
      "totalVictories": 2,
      "totalDraws": 0,
      "totalLosses": 0,
      "goalsFavor": 3,
      "goalsOwn": 1,
      "goalsBalance": 2,
      "efficiency": "100.00"
    },
    {
      "name": "São Paulo",
      "totalPoints": 4,
      "totalGames": 3,
      "totalVictories": 1,
      "totalDraws": 1,
      "totalLosses": 1,
      "goalsFavor": 5,
      "goalsOwn": 5,
      "goalsBalance": 0,
      "efficiency": "44.44"
    },
    {
      "name": "Real Brasília",
      "totalPoints": 4,
      "totalGames": 3,
      "totalVictories": 1,
      "totalDraws": 1,
      "totalLosses": 1,
      "goalsFavor": 3,
      "goalsOwn": 4,
      "goalsBalance": -1,
      "efficiency": "44.44"
    },
    {
      "name": "Grêmio",
      "totalPoints": 4,
      "totalGames": 3,
      "totalVictories": 1,
      "totalDraws": 1,
      "totalLosses": 1,
      "goalsFavor": 5,
      "goalsOwn": 7,
      "goalsBalance": -2,
      "efficiency": "44.44"
    },
    {
      "name": "Ferroviária",
      "totalPoints": 4,
      "totalGames": 4,
      "totalVictories": 1,
      "totalDraws": 1,
      "totalLosses": 2,
      "goalsFavor": 4,
      "goalsOwn": 6,
      "goalsBalance": -2,
      "efficiency": "33.33"
    },
    {
      "name": "Flamengo",
      "totalPoints": 4,
      "totalGames": 3,
      "totalVictories": 1,
      "totalDraws": 1,
      "totalLosses": 1,
      "goalsFavor": 1,
      "goalsOwn": 3,
      "goalsBalance": -2,
      "efficiency": "44.44"
    },
    {
      "name": "Avaí/Kindermann",
      "totalPoints": 3,
      "totalGames": 2,
      "totalVictories": 1,
      "totalDraws": 0,
      "totalLosses": 1,
      "goalsFavor": 1,
      "goalsOwn": 1,
      "goalsBalance": 0,
      "efficiency": "50.00"
    },
    {
      "name": "Cruzeiro",
      "totalPoints": 3,
      "totalGames": 3,
      "totalVictories": 1,
      "totalDraws": 0,
      "totalLosses": 2,
      "goalsFavor": 6,
      "goalsOwn": 7,
      "goalsBalance": -1,
      "efficiency": "33.33"
    },
    {
      "name": "Santos",
      "totalPoints": 2,
      "totalGames": 2,
      "totalVictories": 0,
      "totalDraws": 2,
      "totalLosses": 0,
      "goalsFavor": 3,
      "goalsOwn": 3,
      "goalsBalance": 0,
      "efficiency": "33.33"
    },
    {
      "name": "Bahia",
      "totalPoints": 2,
      "totalGames": 2,
      "totalVictories": 0,
      "totalDraws": 2,
      "totalLosses": 0,
      "goalsFavor": 2,
      "goalsOwn": 2,
      "goalsBalance": 0,
      "efficiency": "33.33"
    },
    {
      "name": "Minas Brasília",
      "totalPoints": 1,
      "totalGames": 2,
      "totalVictories": 0,
      "totalDraws": 1,
      "totalLosses": 1,
      "goalsFavor": 1,
      "goalsOwn": 3,
      "goalsBalance": -2,
      "efficiency": "16.67"
    },
    {
      "name": "Botafogo",
      "totalPoints": 0,
      "totalGames": 2,
      "totalVictories": 0,
      "totalDraws": 0,
      "totalLosses": 2,
      "goalsFavor": 1,
      "goalsOwn": 4,
      "goalsBalance": -3,
      "efficiency": "0.00"
    },
    {
      "name": "Napoli-SC",
      "totalPoints": 0,
      "totalGames": 3,
      "totalVictories": 0,
      "totalDraws": 0,
      "totalLosses": 3,
      "goalsFavor": 1,
      "goalsOwn": 10,
      "goalsBalance": -9,
      "efficiency": "0.00"
    }
  ];

const mockLeaderboarTeams = [
    {
    "id": 1,
    "teamName": "Avaí/Kindermann"
    },
    {
    "id": 2,
    "teamName": "Bahia"
    },
    {
    "id": 3,
    "teamName": "Botafogo"
    },
    {
    "id": 4,
    "teamName": "Corinthians"
    },
    {
    "id": 5,
    "teamName": "Cruzeiro"
    },
    {
    "id": 6,
    "teamName": "Ferroviária"
    },
    {
    "id": 7,
    "teamName": "Flamengo"
    },
    {
    "id": 8,
    "teamName": "Grêmio"
    },
    {
    "id": 9,
    "teamName": "Internacional"
    },
    {
    "id": 10,
    "teamName": "Minas Brasília"
    },
    {
    "id": 11,
    "teamName": "Napoli-SC"
    },
    {
    "id": 12,
    "teamName": "Palmeiras"
    },
    {
    "id": 13,
    "teamName": "Real Brasília"
    },
    {
    "id": 14,
    "teamName": "Santos"
    },
    {
    "id": 15,
    "teamName": "São José-SP"
    },
    {
    "id": 16,
    "teamName": "São Paulo"
    }
]

const mockLeaderboardAll = [
  {
    "name": "Palmeiras",
    "totalPoints": 13,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 1,
    "totalLosses": 0,
    "goalsFavor": 17,
    "goalsOwn": 5,
    "goalsBalance": 12,
    "efficiency": "86.67"
  },
  {
    "name": "Corinthians",
    "totalPoints": 12,
    "totalGames": 5,
    "totalVictories": 4,
    "totalDraws": 0,
    "totalLosses": 1,
    "goalsFavor": 12,
    "goalsOwn": 3,
    "goalsBalance": 9,
    "efficiency": "80.00"
  },
  {
    "name": "Santos",
    "totalPoints": 11,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 2,
    "totalLosses": 0,
    "goalsFavor": 12,
    "goalsOwn": 6,
    "goalsBalance": 6,
    "efficiency": "73.33"
  },
  {
    "name": "Grêmio",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 9,
    "goalsOwn": 8,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "Internacional",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 7,
    "goalsOwn": 6,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "Real Brasília",
    "totalPoints": 10,
    "totalGames": 5,
    "totalVictories": 3,
    "totalDraws": 1,
    "totalLosses": 1,
    "goalsFavor": 5,
    "goalsOwn": 4,
    "goalsBalance": 1,
    "efficiency": "66.67"
  },
  {
    "name": "São Paulo",
    "totalPoints": 8,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 2,
    "totalLosses": 1,
    "goalsFavor": 9,
    "goalsOwn": 6,
    "goalsBalance": 3,
    "efficiency": "53.33"
  },
  {
    "name": "Ferroviária",
    "totalPoints": 7,
    "totalGames": 6,
    "totalVictories": 2,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 7,
    "goalsOwn": 8,
    "goalsBalance": -1,
    "efficiency": "38.89"
  },
  {
    "name": "São José-SP",
    "totalPoints": 6,
    "totalGames": 5,
    "totalVictories": 2,
    "totalDraws": 0,
    "totalLosses": 3,
    "goalsFavor": 5,
    "goalsOwn": 6,
    "goalsBalance": -1,
    "efficiency": "40.00"
  },
  {
    "name": "Flamengo",
    "totalPoints": 5,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 2,
    "goalsFavor": 2,
    "goalsOwn": 5,
    "goalsBalance": -3,
    "efficiency": "33.33"
  },
  {
    "name": "Minas Brasília",
    "totalPoints": 5,
    "totalGames": 6,
    "totalVictories": 1,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 5,
    "goalsOwn": 9,
    "goalsBalance": -4,
    "efficiency": "27.78"
  },
  {
    "name": "Cruzeiro",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 8,
    "goalsOwn": 10,
    "goalsBalance": -2,
    "efficiency": "26.67"
  },
  {
    "name": "Avaí/Kindermann",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 4,
    "goalsOwn": 8,
    "goalsBalance": -4,
    "efficiency": "26.67"
  },
  {
    "name": "Botafogo",
    "totalPoints": 4,
    "totalGames": 5,
    "totalVictories": 1,
    "totalDraws": 1,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 8,
    "goalsBalance": -5,
    "efficiency": "26.67"
  },
  {
    "name": "Bahia",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 2,
    "goalsOwn": 6,
    "goalsBalance": -4,
    "efficiency": "13.33"
  },
  {
    "name": "Napoli-SC",
    "totalPoints": 2,
    "totalGames": 5,
    "totalVictories": 0,
    "totalDraws": 2,
    "totalLosses": 3,
    "goalsFavor": 3,
    "goalsOwn": 12,
    "goalsBalance": -9,
    "efficiency": "13.33"
  }
];

export {
  matchesIsFinished,
  mockLeaderboardHome,
  mockLeaderboarTeams,
  mockLeaderboardAway,
  mockLeaderboardAll,
}