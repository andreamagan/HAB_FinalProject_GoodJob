'use strict';

const applyJobUC = require('../../../domain/use-cases/jobs/apply-job-uc');

async function applyJobController(req, res, next) {
  const { jobId } = req.query;
  const { authorization } = req.headers;

  try {
    const applicants = await applyJobUC(jobId, authorization);
    return res.status(200).send(applicants);
  } catch (e) {
    return next(e);
  }
}

module.exports = applyJobController;
