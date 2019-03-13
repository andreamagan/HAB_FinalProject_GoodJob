'use strict';

const bcrypt = require('bcrypt');
const dot = require('dot-object');
const PlayerModel = require('../../../models/player-model');

// async function insertUserAccountInDB(email, password, role) {

// }

async function checkIfUserAccountExist(email) {
  const filter = {
    'accountInfo.email': email,
  };

  const result = await PlayerModel.find(filter);

  if (!result) {
    throw new Error('no se encuentra la cuenta');
  }
  return null;
}


async function checkIfActivatedAccount(email) {
  const filter = {
    'accountInfo.email': email,
    'accountInfo.activatedAt': { $ne: null },
  };

  const result = await PlayerModel.find(filter);

  if (!result) {
    throw new Error('la cuenta no está activada');
  }
  return null;
}

async function checkIfCorrectPassword(email, password) {
  const filter = {
    'accountInfo.email': email,
    'accountInfo.password': password,
  };

  const projection = {
    'accountInfo.password': 1,
    _id: 0,
  };

  const result = await PlayerModel.find(filter, projection).lean();
  const { accountPassword } = result;
  const correctPassword = await bcrypt.compare(password, accountPassword);

  if (correctPassword === false) {
    throw new Error('la contraseña es invalida');
  }
  return null;
}

async function getUserAccountInfo(email, password) {
  const filter = {
    'accountInfo.email': email,
    'accountInfo.password': password,
  };

  const UserAccountInfo = await PlayerModel.find(filter);

  return UserAccountInfo;
}


module.exports = {
  // insertUserAccountInDB,
  checkIfActivatedAccount,
  checkIfUserAccountExist,
};
