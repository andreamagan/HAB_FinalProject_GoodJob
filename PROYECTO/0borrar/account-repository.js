'use strict';

const bcrypt = require('bcrypt');
const dot = require('dot-object');
const PlayerModel = require('../Backend/models/player-model');
const TeamModel = require('../Backend/models/team-model');
const createNotFoundDataError = require('../Backend/domain/use-cases/errors/not-found-error');

async function insertUserAccountInDB(userData) {
  const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
  const {
    uuid, email, securePassword, verificationCode, role,
  } = userData;

  const playerProfileData = {
    personalInfo: {
      fullName: null,
      nickName: null,
      description: null,
      social: {
        twitterUrl: null,
        twichUrl: null,
        instagramUrl: null,
      },
    },
    accountInfo: {
      email,
      password: securePassword,
      createdAt: now,
      activatedAt: null,
      verificationCode,
      uuid,
      role,
    },
    tags: [],
    avatarUrl: null,
    team: null,

    background: {
      experience: [{
        company: null,
        job: null,
        dateStart: null,
        dateEnd: null,
      }],
      education: [{
        school: null,
        degree: null,
        dateStart: null,
        dateEnd: null,
      }],
    },
  };

  const teamProfileData = {
    teamInfo: {
      fullNameTeam: null,
      shortName: null,
      description: null,
      rrss: {
        twitterUrl: null,
        twichUrl: null,
        instagramUrl: null,
        webUrl: null,
      },
    },
    accountInfo: {
      email,
      password: securePassword,
      created_at: now,
      activated_at: null,
      verificationCode,
      uuid,
      role,
    },
    tags: [],
    avatarUrl: null,

    players: [],
  };

  try {
    if (role === 'player') {
      const userCreated = await PlayerModel.create(playerProfileData);
      return userCreated;
    }
    const userCreated = await TeamModel.create(teamProfileData);
    return userCreated;
  } catch (e) {
    throw e;
  }
}

async function checkIfUserAccountExist(email, role) {
  const filter = {
    'accountInfo.email': email,
  };

  const [result] = (role === 'player') ? await PlayerModel.find(filter) : await TeamModel.find(filter);

  if (!result || [result] === undefined) {
    throw createNotFoundDataError();
  }
  return null;
}


async function checkIfActivatedAccount(email, role) {
  const filter = {
    'accountInfo.email': email,
    'accountInfo.activatedAt': { $ne: null },
  };

  const [result] = (role === 'player') ? await PlayerModel.find(filter) : await TeamModel.find(filter);

  if (!result || [result] === undefined) {
    throw createNotFoundDataError();
  }
  return null;
}

async function checkIfCorrectPassword(email, password, role) {
  const filter = {
    'accountInfo.email': email,
  };

  const projection = {
    'accountInfo.password': 1,
    _id: 0,
  };
  const [result] = (role === 'player') ? await PlayerModel.find(filter, projection) : await TeamModel.find(filter, projection);

  const { password: secretPassword } = result.accountInfo;
  const correctPassword = await bcrypt.compare(password, secretPassword);

  if (correctPassword === false) {
    throw new Error('la contraseña es invalida');
  }
  return null;
}


async function getUserAccountInfo(email, role) {
  const filter = {
    'accountInfo.email': email,
  };
  const userAccountInfo = (role === 'player') ? await PlayerModel.find(filter) : await TeamModel.find(filter);
  console.log('cuenta', userAccountInfo);
  return userAccountInfo;
}

module.exports = {
  insertUserAccountInDB,
  checkIfActivatedAccount,
  checkIfUserAccountExist,
  checkIfCorrectPassword,
  getUserAccountInfo,
};
