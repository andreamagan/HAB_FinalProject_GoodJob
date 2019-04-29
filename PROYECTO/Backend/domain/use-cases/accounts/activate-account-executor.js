'use strict';

const playerRepository = require('../../repositories/player-repository');
const teamRepository = require('../../repositories/team-repository');

async function activateAccountExecutor(verificationData) {
  const { role, email, verificationCode } = verificationData;
  try {
    if (role === 'player') {
      const a = await playerRepository.activateAccount(verificationCode, email);
      return a;
    }
    return await teamRepository.activateAccount(verificationCode, email);
  } catch (e) {
    throw (e);
  }
}

module.exports = activateAccountExecutor;
