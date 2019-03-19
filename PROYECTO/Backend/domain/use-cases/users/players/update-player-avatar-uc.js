'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const playerRepository = require('../../../repositories/user/player-repository');


async function uploadAvatarUC(file, authorization) {
  const { uuid } = await checkAuthorization(authorization);

  try {
    const avatarUrl = await playerRepository.updateAvatar(file, uuid);
    console.log('uc', avatarUrl);
    return avatarUrl;
  } catch (err) {
    throw err;
  }
}

module.exports = uploadAvatarUC;
