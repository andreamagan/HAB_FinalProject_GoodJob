'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
// const mailChimp = require('') //TODO: Integracion con mailchimp
const uuidV4 = require('uuid/v4');

const createAccountExecutor = require('../accounts/create-account-executor');


// TODO: ¿Refactorizar?
async function validateData(payload) {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    role: Joi.string().min(4).max(6).required(),
  };

  return Joi.validate(payload, schema);
}


async function createAccountUC(accountData) {
  const { email, password, role } = accountData;

  try {
    await validateData(accountData);
  } catch (e) {
    throw e;
  }

  const verificationCode = uuidV4();
  const securePassword = await bcrypt.hash(password, 10);
  const uuid = uuidV4();
  const userData = {
    uuid, email, securePassword, verificationCode, role,
  };
  const userCreated = await createAccountExecutor(userData);
  return userCreated;

  /**
   * TODO:
   * Enviar mail de activación de cuenta
   */
}

module.exports = createAccountUC;
