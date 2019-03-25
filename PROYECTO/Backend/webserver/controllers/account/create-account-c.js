'use strict';

const createAccountUC = require('../../../domain/use-cases/accounts/create-account-uc');

async function createAccountController(req, res, next) {
  const acountData = { ...req.body };

  try {
    await createAccountUC(acountData);
    return res.status(201).json();
  } catch (e) {
    return next(e);
  }
}

module.exports = createAccountController;
