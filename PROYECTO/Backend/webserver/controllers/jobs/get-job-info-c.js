'use strict';

const getJobInfoUC = require('../../../domain/use-cases/jobs/get-job-info-uc');

async function getJobInfoController(req, res, next) {
  const jobId = { ...req.body };
  console.log(jobId);
  const { authorization } = req.headers;

  try {
    const jobInfo = await getJobInfoUC(jobId, authorization);

    return res.status(200).send(jobInfo);
  } catch (e) {
    return next(e);
  }
}

module.exports = getJobInfoController;
