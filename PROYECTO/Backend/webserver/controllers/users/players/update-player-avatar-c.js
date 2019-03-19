'use strict';

const updatePlayerAvatarUC = require('../../../../domain/use-cases/users/players/update-player-avatar-uc');

async function updatePlayerAvatarController(req, res, next) {
  const { file } = req;
  const { authorization } = req.headers;

  try {
    const avatarUrl = await updatePlayerAvatarUC(file, authorization);
    console.log('c', avatarUrl);
    res.header('Location', avatarUrl);
    return res.status(204).send();
  } catch (e) {
    return next(e);
  }
}

module.exports = updatePlayerAvatarController;
