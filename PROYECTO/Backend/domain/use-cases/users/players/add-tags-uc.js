'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const playerRepository = require('../../../repositories/player-repository');


async function addTagsUC(userTags, authorization) {
  const { uuid } = await checkAuthorization(authorization);

  try {
    await playerRepository.addTags(userTags, uuid);
  } catch (err) {
    throw err;
  }
}

module.exports = addTagsUC;
