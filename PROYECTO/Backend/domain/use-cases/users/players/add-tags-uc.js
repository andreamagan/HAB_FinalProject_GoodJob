'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const acceptOnlyRole = require('../../sessions/accept-only-role-uc');

const playerRepository = require('../../../repositories/player-repository');


async function addTagsUC(userTags, authorization) {
  const { uuid, role } = await checkAuthorization(authorization);
  await acceptOnlyRole(role, process.env.EXPECTED_ROLE_PLAYER);

  try {
    await playerRepository.addTags(userTags, uuid);
  } catch (err) {
    throw err;
  }
}

module.exports = addTagsUC;
