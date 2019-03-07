'use strict';

const mongoose = require('mongoose');

const experienceModel = require('./experience-player-model');
const educationModel = require('./education-player-model');

const { Schema } = mongoose;

const playerSchema = new Schema({
  personalInfo: {
    fullName: String,
    nickName: String,
    description: String,
    rrss: {
      twitterUrl: String,
      twichUrl: String,
      instagramUrl: String,
    },
  },
  accountInfo: {
    email: String,
    password: String,
    created_at: Date,
    activated_at: Date,
    uuid: {
      type: String,
      unique: true,
    },
    role: String,
  },
  tags: [String],
  avatarUrl: String,
  team: String,

  background: {
    experience: [experienceModel],
    education: [educationModel],
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
