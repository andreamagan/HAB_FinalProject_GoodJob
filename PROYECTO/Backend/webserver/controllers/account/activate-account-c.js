'use strict';

const activateAccountUC = require('../../../domain/use-cases/accounts/activate-account-uc');

async function activateAccountController(req, res, next) {
  const verificationData = { ...req.query };
  try {
    const activate = await activateAccountUC(verificationData);
    if (activate) {
      return res.redirect(`${process.env.HTTP_FRONT_DOMAIN}/welcome`);
    }
    return res.send('Something was wrong');
  } catch (e) {
    return next(e);
  }
}

module.exports = activateAccountController;
