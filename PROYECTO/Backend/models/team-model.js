'use strict';

const mongoose = require('mongoose');


const { Schema } = mongoose;

const teamSchema = new Schema({
  teamInfo: {
    fullNameTeam: String,
    shortName: String,
    description: String,
    rrss: {
      twitterUrl: String,
      twichUrl: String,
      instagramUrl: String,
      webUrl: String,
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

  players: [],
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
