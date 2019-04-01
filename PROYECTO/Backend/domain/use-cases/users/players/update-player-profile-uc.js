'use strict';

const Joi = require('joi');

const checkAuthorization = require('../../sessions/check-jwt-token-uc');
const playerRepository = require('../../../repositories/player-repository');
const acceptOnlyRole = require('../../sessions/accept-only-role-uc');

async function validate(payload) {
  const schema = {
    personalInfo: {
      fullName: Joi.string()
        .min(3)
        .max(128)
        .required(),
      nickName: Joi.string()
        .min(3)
        .max(50)
        .required(),
      description: Joi.string().allow(null),
      social: {
        twitterUrl: Joi.string()
          .uri()
          .allow(null),
        twichUrl: Joi.string()
          .uri()
          .allow(null),
        instagramUrl: Joi.string()
          .uri()
          .allow(null),
      },
    },
  };

  return Joi.validate(payload, schema);
}

async function updateUserProfile(userData, authorization) {
  const { uuid, role } = await checkAuthorization(authorization);
  await acceptOnlyRole(role, process.env.EXPECTED_ROLE_PLAYER);

  await validate(userData);

  try {
    await playerRepository.updateUserProfile(uuid, userData);
    return null;
  } catch (err) {
    throw err;
  }
}

module.exports = updateUserProfile;
