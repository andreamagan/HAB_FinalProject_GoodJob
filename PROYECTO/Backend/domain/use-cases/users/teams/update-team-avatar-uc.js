'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const acceptOnlyRole = require('../sessions/accept-only-role-uc');

const teamRepository = require('../../../repositories/team-repository');


async function uploadAvatarUC(file, authorization) {
  const { uuid, role } = await checkAuthorization(authorization);
  await acceptOnlyRole(role, process.env.EXPECTED_ROLE_TEAM);

  try {
    const avatarUrl = await teamRepository.updateAvatar(file, uuid);
    console.log('uc', avatarUrl);
    return avatarUrl;
  } catch (err) {
    throw err;
  }
}

module.exports = uploadAvatarUC;
