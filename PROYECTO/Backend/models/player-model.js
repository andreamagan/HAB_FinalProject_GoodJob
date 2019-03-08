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
    social: {
      twitterUrl: String,
      twichUrl: String,
      instagramUrl: String,
    },
  },
  accountInfo: {
    email: String,
    password: String,
    createdAt: Date,
    activatedAt: Date,
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
    experience: [{
      company: String,
      job: String,
      dateStart: Date,
      dateEnd: Date,
    }],
    education: [{
      school: String,
      degree: String,
      dateStart: Date,
      dateEnd: Date,
    }],
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
