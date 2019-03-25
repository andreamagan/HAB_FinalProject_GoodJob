'use strict';

const accountRouter = require('./account-router.js');
const playerRouter = require('./player-router.js');
const teamRouter = require('./team-router');
const jobRouter = require('./job-router');

module.exports = {
  accountRouter,
  playerRouter,
  teamRouter,
  jobRouter,
};
