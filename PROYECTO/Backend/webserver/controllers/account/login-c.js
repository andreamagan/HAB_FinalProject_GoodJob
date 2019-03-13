'use strict';

const loginUC = require('../../../domain/use-cases/account/login-uc');

async function login(req, res, next) {
  const credentials = { ...req.body };

  try {
    await loginUC(credentials);
    return res.status(200).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = login;
