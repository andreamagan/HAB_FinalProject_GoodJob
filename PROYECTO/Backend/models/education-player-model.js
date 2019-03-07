'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const educationSchema = new Schema({
  school: String,
  degree: String,
  dateStart: Date,
  dateEnd: Date,
});

const EducationModel = mongoose.model('Education', educationSchema);

module.exports = EducationModel;
