'use strict';

const getJobApplicantsUC = require('../../../domain/use-cases/jobs/get-job-applicants-uc');

async function getJobApplicantsController(req, res, next) {
  const jobId = { ...req.body };
  const { authorization } = req.headers;

  try {
    await getJobApplicantsUC(jobId, authorization);
    return res.status(201).send('');
  } catch (e) {
    return next(e);
  }
}

module.exports = getJobApplicantsController;
