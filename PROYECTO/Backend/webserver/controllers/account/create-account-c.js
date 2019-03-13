'use strict';

const createPlayerAccountUC = require('../../../domain/use-cases/player/create-player-account-uc');
// const createTeamAccountUC = require('../../domain/use-cases/player/create-player-account-uc');

async function createAccountController(req, res, next) {
  const acountData = { ...req.body };

  try {
    await createPlayerAccountUC(acountData);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = createAccountController;
