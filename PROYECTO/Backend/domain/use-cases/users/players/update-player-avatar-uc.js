'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const playerRepository = require('../../../repositories/player-repository');
const acceptOnlyRole = require('../../sessions/accept-only-role-uc');

async function uploadAvatarUC(file, authorization) {
  const { uuid, role } = await checkAuthorization(authorization);
  await acceptOnlyRole(role, process.env.EXPECTED_ROLE_PLAYER);

  try {
    const avatarUrl = await playerRepository.updateAvatar(file, uuid);
    console.log('uc', avatarUrl);
    return avatarUrl;
  } catch (err) {
    throw err;
  }
}

module.exports = uploadAvatarUC;
