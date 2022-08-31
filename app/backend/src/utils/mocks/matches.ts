export const allMatches = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'São Paulo',
    },
    teamAway: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
    teamHome: {
      teamName: 'Internacional',
    },
    teamAway: {
      teamName: 'Santos',
    },
  },
];

export const matchForCreate = {
  homeTeam: 11,
  awayTeam: 1,
  homeTeamGoals: 25,
  awayTeamGoals: 2,
};

export const matchCreated = {
  id: 49,
  homeTeam: 11,
  awayTeam: 1,
  homeTeamGoals: 25,
  awayTeamGoals: 2,
  inProgress: true,
};

export const messageFinished = {
  message: 'Finished',
};
