'use strict';

const express = require('express');
const multer = require('multer');

const getPlayerProfile = require();
const checkJwtToken = require();
const updatePlayerProfile = require();
const uploadAvatar = require();
const uploadBackground = require();

const upload = multer();
const router = express.Router();

router.get('/player', checkJwtToken, getPlayerProfile);
router.put('/player', checkJwtToken, updatePlayerProfile);
router.post('/player/avatar', checkJwtToken, upload.single('avatar'), uploadAvatar);
router.put('/player/background', checkJwtToken, updateBackground);

module.exports = router;
