'use strict';

const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary');
const dot = require('dot-object');

const PlayerModel = require('../../models/player-model');

const createNotFoundDataError = require('../use-cases/errors/not-found-error');

async function insertUserAccountInDB(userData) {
  const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
  const {
    uuid, email, securePassword, verificationCode, role,
  } = userData;

  const playerProfileData = {
    personalInfo: {
      fullName: null,
      nickName: null,
      description: null,
      social: {
        twitterUrl: null,
        twichUrl: null,
        instagramUrl: null,
      },
    },
    accountInfo: {
      email,
      password: securePassword,
      createdAt: now,
      activatedAt: null,
      verificationCode,
      uuid,
      role,
    },
    tags: [],
    avatarUrl: null,
    team: null,

    background: {
      experience: [{
        company: null,
        job: null,
        dateStart: null,
        dateEnd: null,
      }],
      education: [{
        school: null,
        degree: null,
        dateStart: null,
        dateEnd: null,
      }],
    },
  };

  try {
    const userCreated = await PlayerModel.create(playerProfileData);
    return userCreated;
  } catch (e) {
    throw e;
  }
}

async function checkIfUserAccountExist(email) {
  const filter = {
    'accountInfo.email': email,
  };

  const [result] = await PlayerModel.find(filter);

  if (!result || [result] === undefined) {
    throw createNotFoundDataError();
  }
  return null;
}


async function checkIfActivatedAccount(email) {
  const filter = {
    'accountInfo.email': email,
    'accountInfo.activatedAt': { $ne: null },
  };

  const [result] = await PlayerModel.find(filter);

  if (!result || [result] === undefined) {
    throw createNotFoundDataError();
  }
  return null;
}

async function checkIfCorrectPassword(email, password) {
  const filter = {
    'accountInfo.email': email,
  };

  const projection = {
    'accountInfo.password': 1,
    _id: 0,
  };
  const [result] = await PlayerModel.find(filter, projection);

  const { password: secretPassword } = result.accountInfo;
  const correctPassword = await bcrypt.compare(password, secretPassword);

  if (correctPassword === false) {
    throw new Error('la contraseña es invalida');
  }
  return null;
}

async function getUserAccountInfo(email) {
  const filter = {
    'accountInfo.email': email,
  };
  const projection = {
    accountInfo: 1,
  };

  const userAccountInfo = await PlayerModel.find(filter, projection).lean();
  return userAccountInfo;
}

async function getProfile(uuid) {
  const filter = {
    'accountInfo.uuid': uuid,
  };
  const projection = {
    _id: 0,
    __v: 0,
  };

  const profile = await PlayerModel.findOne(filter, projection).lean();
  return profile;
}


async function getApplicantProfile(applicantsUuids) {
  console.log('2', applicantsUuids);
  const filterApplicantsData = {
    'accountInfo.uuid': {
      $in: applicantsUuids,
    },
  };

  const projectionApplicantsData = {
    'accountInfo.uuid': 1,
    avatarUrl: 1,
    'personalInfo.fullName': 1,
    'personalInfo.nickName': 1,
    tags: 1,
    _id: 0,
  };

  const applicantProfiles = await PlayerModel.find(filterApplicantsData, projectionApplicantsData).lean();
  console.log('3', applicantProfiles);
  return applicantProfiles;
}


/**
 * @param {String} uuid
 * @param {Object} userData data to be updated
 * @return {Object} null if everything is ok
 */
async function updateProfile(uuid, userData) {
  const userDataProfileMongoose = dot.dot(userData);
  const filter = {
    'accountInfo.uuid': uuid,
  };
  await PlayerModel.updateOne(filter, userDataProfileMongoose);
  return null;
}


const cloudName = process.env.CLOUDINARI_CLOUD_NAME;
const apiKey = process.env.CLOUDINARI_API_KEY;
const apiSecret = process.env.CLOUDINARI_API_SECRET;

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

async function updateAvatar(file, uuid) {
  if (!file.buffer) {
    throw new Error();
  }

  cloudinary.v2.uploader.upload_stream({
    resource_type: 'raw',
    public_id: uuid,
    width: 200,
    height: 200,
    format: 'jpg',
    crop: 'limit',
  }, async(err, result) => {
    if (err) {
      console.error('hubo error', err);
      throw err;
    }

    const {
      secure_url: avatarUrl,
    } = result;

    const filter = {
      'accountInfo.uuid': uuid,
    };

    await PlayerModel.updateOne(filter, { avatarUrl });
  }).end(file.buffer);
}

async function addTags(userTags, uuid) {
  const tags = Object.values(userTags);
  const filter = {
    'accountInfo.uuid': uuid,
  };
  const update = {
    $set: { tags },
  };
  await PlayerModel.findOneAndUpdate(filter, update);
  return null;
}


async function deleteTags(userTags, uuid) {
  const tags = Object.values(userTags);

  const filter = {
    'accountInfo.uuid': uuid,
  };

  const update = {
    $pull: {
      tags: { $in: tags },
    },
  };

  await PlayerModel.findOneAndUpdate(filter, update);
  return null;
}


async function searchPlayers(keyword) {
  const filter = {
    $text: {
      $search: keyword,
    },
  };

  const score = {
    score: {
      $meta: 'textScore',
    },
  };

  const players = await PlayerModel.find(filter, score).sort(score).lean();
  return players;
}


module.exports = {
  insertUserAccountInDB,
  checkIfActivatedAccount,
  checkIfUserAccountExist,
  checkIfCorrectPassword,
  getUserAccountInfo,
  getProfile,
  getApplicantProfile,
  updateProfile,
  updateAvatar,
  addTags,
  deleteTags,
  searchPlayers,
};
