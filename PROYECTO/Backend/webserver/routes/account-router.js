'use strict';

const express = require('express');

const createAccount = require('../controllers/account/create-account-c');
// const activateAccount = require();
const login = require('../controllers/account/login-c');

const router = express.Router();

router.post('/account', createAccount);
// accountRouter.get('/account/activate', activateAccount);
router.post('/account/login', login);

module.exports = router;
