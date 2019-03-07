'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const experienceSchema = new Schema({
  company: String,
  job: String,
  dateStart: Date,
  dateEnd: Date,
});

const ExperienceModel = mongoose.model('Experience', experienceSchema);

module.exports = ExperienceModel;
