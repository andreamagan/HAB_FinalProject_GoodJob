'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const jobSchema = new Schema({
  team: ObjectId,
  jobId: { Type: String },
  title: String,
  description: String,
  createdAt: Date,
  deletedAt: Date,
  tags: [],
  applicants: [],
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
