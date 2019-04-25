'use strict';

const activateAccountUC = require('../../../domain/use-cases/accounts/activate-account-uc');

async function activateAccountController(req, res, next) {
  const [verificationCode, role, uuid, email] = { ...req.query };
  console.log('activatecontroller', verificationCode, role, uuid, email);
  try {
    await activateAccountUC(verificationCode, role, uuid, email);
    return res.status(201).json();
  } catch (e) {
    return next(e);
  }
}

module.exports = activateAccountController;
