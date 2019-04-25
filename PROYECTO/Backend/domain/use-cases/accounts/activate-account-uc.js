'use strict';

const createAuthenticationError = require('../errors/authentication-error');
const activateAccountExecutor = require('../accounts/activate-account-executor');

async function activateAccountUC(verificationCode, role) {
  if (!verificationCode) {
    throw createAuthenticationError('invalid verification code');
  }

  try {
    await activateAccountExecutor(verificationCode, role);
  } catch (e) {
    throw e;
  }
}

module.exports = activateAccountUC;
