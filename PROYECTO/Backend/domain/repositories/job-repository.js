'use strict';

const uuidV4 = require('uuid/v4');

const JobModel = require('../../models/job-model');

async function postJob(teamProfile, jobInputData) {
  const now = new Date()
    .toISOString()
    .substring(0, 19)
    .replace('T', ' ');
  const { title, description, tags } = jobInputData;
  const { shortName } = teamProfile.teamInfo;
  const { _id } = teamProfile;
  const uuid = uuidV4();

  const jobData = {
    team: _id,
    jobId: `${shortName}_${uuid}`,
    title,
    description,
    createdAt: now,
    deletedAt: null,
    tags,
    applicants: [],
  };
  const jobPosted = await JobModel.create(jobData);
  return jobPosted;
}

async function getJobApplicantsUuids(jobId) {
  const filter = {
    jobId,
  };

  const projection = {
    applicants: 1,
    _id: 0,
  };

  const applicantsResult = await JobModel.findOne(filter, projection).lean(); // [{ ...user1 }, { ...user2 }, ...{user n}]
  // borrame
  console.log('applicantsResult', applicantsResult);
  const applicantsUuids = applicantsResult.applicants.map(f => f.uuid); // [uuid1, uuid2, ..., uuid n]
  console.log('applicantsUuids', applicantsUuids);
  return applicantsUuids;
}

async function getJobInfo(jobId) {
  const projection = {
    title: 1,
    description: 1,
    createdAt: 1,
    tags: 1,
    _id: 0,
  };

  const jobInfo = await JobModel.find(jobId, projection).lean();
  console.log(jobInfo);
  return jobInfo;
}

async function deleteJob(jobId) {
  const now = new Date()
    .toISOString()
    .substring(0, 19)
    .replace('T', ' ');

  update = {
    deletedAt: now,
  };

  await JobModel.findOneAndUpdate(jobId, update).lean();
  return null;
}

module.exports = {
  postJob,
  getJobInfo,
  getJobApplicantsUuids,
  deleteJob,
};
