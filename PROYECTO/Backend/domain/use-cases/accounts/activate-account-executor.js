'use strict';

const playerRepository = require('../../repositories/player-repository');
const teamRepository = require('../../repositories/team-repository');

async function activateAccountExecutor(userData) {
  const { role, email, uuid } = userData;

  if (role === 'player') {
    try {
      const isActivate = await playerRepository.checkIfActivatedAccount(email);
      if (!isActivate) {
        await playerRepository.activateAccount(uuid);
      }
    } catch (e) {
      throw e;
    }
  } else {
    try {
      const isActivate = await teamRepository.checkIfActivatedAccount(email);
      if (!isActivate) {
        await teamRepository.activateAccount(uuid);
      }
    } catch (e) {
      throw e;
    }
  }
}

module.exports = activateAccountExecutor;
