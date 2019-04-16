'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;

const teamSchema = new Schema({
  teamInfo: {
    fullName: String,
    shortName: String,
    description: String,
    social: {
      twitterUrl: String,
      twitchUrl: String,
      instagramUrl: String,
      webUrl: String,
    },
  },
  accountInfo: {
    email: String,
    password: String,
    createdAt: Date,
    activatedAt: Date,
    verificationCode: String,
    uuid: {
      type: String,
      unique: true,
    },
    role: String,
  },
  tags: [String],
  avatarUrl: String,

  players: [],
  jobs: [],
});

teamSchema.index(
  {
    'teamInfo.fullname': 'text',
    'teamInfo.shortName': 'text',
    'teamInfo.description': 'text',
    tags: 'text',
  },
);


const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
