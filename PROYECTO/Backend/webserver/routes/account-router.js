'use strict';

const express = require('express');

// const createPlayerAccount = require('../controllers/account/create-player-account-c');
// const createTeamAccount = require('../controllers/account/create-team-account-c');
// const activateAccount = require();
const login = require('../controllers/account/login-c');

const accountRouter = express.Router();

// accountRouter.post('/account/player', createPlayerAccount);
// accountRouter.post('/account/team', createTeamAccount);
// accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;
