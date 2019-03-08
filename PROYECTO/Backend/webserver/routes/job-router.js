'use strict';

const express = require('express');

const getJobInfo = require();
const checkJwtToken = require();
const createJob = require();
const deleteJob = require();
const applyJob = require();
const viewApplicants = require();
const deleteApplicants = require();


const router = express.Router();

router.get('/jobs', checkJwtToken, getJobInfo);

router.post('/team/jobs', checkJwtToken, createJob);
router.delete('/team/jobs', checkJwtToken, deleteJob);
router.get('/team/jobs', checkJwtToken, viewApplicants);
router.patch('/team/jobs', checkJwtToken, deleteApplicants);

router.put('/jobs/apply', checkJwtToken, applyJob);

module.exports = router;
