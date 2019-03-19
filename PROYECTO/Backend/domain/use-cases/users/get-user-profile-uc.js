'use strict';

const playerRepository = require('../../repositories/user/player-repository');
const teamRepository = require('../../repositories/user/team-repository');

const checkAuthorization = require('../sessions/check-jwt-token-uc');

async function getUserProfile(uuid, role, authorization) {
  const userUuid = uuid;
  const userRole = role;

  await checkAuthorization(authorization);

  try {
    const userProfile = (userRole === 'player') ? await playerRepository.getProfile(userUuid) : teamRepository.getProfile(userUuid);
    return userProfile;
  } catch (e) {
    throw e;
  }
}

module.exports = getUserProfile;
