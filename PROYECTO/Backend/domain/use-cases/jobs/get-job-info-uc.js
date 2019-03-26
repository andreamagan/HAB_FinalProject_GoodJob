'use strict';

const checkAuthorization = require('../sessions/check-jwt-token-uc');

const jobRepository = require('../../repositories/job-repository');

async function jobInfoUC(jobId, authorization) {
  const { role } = await checkAuthorization(authorization);

  try {
    const jobInfo = await jobRepository.getJobInfo(jobId);
    return jobInfo;
  } catch (e) {
    throw e;
  }
}

module.exports = jobInfoUC;
