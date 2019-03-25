'use strict';

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const playerRepository = require('../../../repositories/player-repository');


async function deleteTagsUC(userTags, authorization) {
  const { uuid } = await checkAuthorization(authorization);
  try {
    await playerRepository.deleteTags(userTags, uuid);
  } catch (err) {
    throw err;
  }
}

module.exports = deleteTagsUC;
