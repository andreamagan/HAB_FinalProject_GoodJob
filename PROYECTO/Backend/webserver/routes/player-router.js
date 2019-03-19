'use strict';

const express = require('express');
const multer = require('multer');

const getPlayerProfile = require('../controllers/users/get-user-profile-c');
const updatePlayerProfile = require('../controllers/users/players/update-player-profile-c');
const uploadAvatar = require('../controllers/users/players/update-player-avatar-c');
// const updateBackground = require();

const upload = multer();
const router = express.Router();

router.get('/player', getPlayerProfile);
router.put('/player', updatePlayerProfile);
router.post('/player/avatar', upload.single('avatar'), uploadAvatar);
// router.put('/player/background', checkJwtToken, updateBackground);

module.exports = router;
