'use strict';

const Joi = require('joi');

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const teamRepository = require('../../../repositories/team-repository');


async function validate(payload) {
  const schema = {
    teamInfo: ({
      fullNameTeam: Joi.string().min(3).max(128).required(),
      shortName: Joi.string().max(3).required(),
      description: Joi.string().allow(null),
      social: ({
        twitterUrl: Joi.string().uri().allow(null),
        twichUrl: Joi.string().uri().allow(null),
        instagramUrl: Joi.string().uri().allow(null),
        webUrl: Joi.string().uri().allow(null),
      }),
    }),
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfile(userData, authorization) {
  const { uuid } = await checkAuthorization(authorization);

  await validate(userData);

  try {
    await teamRepository.updateUserProfile(uuid, userData);
  } catch (err) {
    throw err;
  }
}

module.exports = updateUserProfile;
