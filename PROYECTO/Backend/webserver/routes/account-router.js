'use strict';

const express = require('express');

const createAccount = require('../controllers/account/create-account-c');
// const activateAccount = require();
const login = require('../controllers/account/login-c');

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);
// accountRouter.post('/account/team', createTeamAccount);
// accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;
