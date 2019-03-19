'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const teamRepository = require('../../../repositories/user/team-repository');


async function uploadAvatarUC(file, authorization) {
  const { uuid } = await checkAuthorization(authorization);

  try {
    const avatarUrl = await teamRepository.updateAvatar(file, uuid);
    console.log('uc', avatarUrl);
    return avatarUrl;
  } catch (err) {
    throw err;
  }
}

module.exports = uploadAvatarUC;
