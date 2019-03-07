'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema({
  jobUuid: String,
  jobTitle: String,
  jobDescription: String,
  createdAt: Date,
  tags: [],
  applicants: [],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
