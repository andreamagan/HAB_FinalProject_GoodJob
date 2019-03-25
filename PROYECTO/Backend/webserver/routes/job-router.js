'use strict';

const express = require('express');


const postJob = require('../controllers/jobs/post-job-c');

// //const updateJob = require();
// const deleteJob = require();

const getJobApplicants = require('../controllers/jobs/get-job-applicants-c.js');
// // const rejectJobApplicants = require();

const getJobInfo = require('../controllers/jobs/get-job-info-c');
// const applyJob = require();

const router = express.Router();

router.post('/job', postJob);
// //router.put('/job', updateJob);
// router.delete('/job', deleteJob);
router.get('/job/applicants', getJobApplicants);
// // router.put('/job/applicants', rejectJobApplicants);

router.get('/job', getJobInfo);
// router.put('/jobs/apply', applyJob);


module.exports = router;
