'use strict';

const playerRepository = require('../../repositories/user/player-repository');
const teamRepository = require('../../repositories/user/team-repository');

async function createAccountExecutor(userData) {
  const { role } = userData;
  const userCreated = (role === 'player') ? await playerRepository.insertUserAccountInDB(userData) : await teamRepository.insertUserAccountInDB(userData);
  return userCreated;
}

module.exports = createAccountExecutor;
