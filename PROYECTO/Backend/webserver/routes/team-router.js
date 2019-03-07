'use strict';

const express = require('express');
const multer = require('multer');

const getTeamProfile = require();
const checkJwtToken = require();
const updateTeamProfile = require();
const uploadAvatar = require();

const upload = multer();
const router = express.Router();

router.get('/team', checkJwtToken, getTeamProfile);
router.put('/team', checkJwtToken, updateTeamProfile);
router.post('/team/avatar', checkJwtToken, upload.single('avatar'), uploadAvatar);


module.exports = router;
