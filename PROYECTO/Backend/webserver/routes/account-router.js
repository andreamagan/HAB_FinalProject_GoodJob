'use strict';

const express = require('express');

const createAccount = require();
const activateAccount = require();
const login = require();

const accountRouter = express.Router();

accountRouter.post('/account', createAccount);
accountRouter.get('/account/activate', activateAccount);
accountRouter.post('/account/login', login);

module.exports = accountRouter;
