import { JobRequest, Job } from 'src/app/shared/models/job.model';


export class GetJobDetail {
  static readonly type = '[Job] GetJobDetail';
  constructor(public jobId: string) { }
}

export class GetJobDetailSuccess {
  static readonly type = '[Job] GetJobDetailSuccess'
  constructor(public jobDetail: {}) { }
}

export class GetJobDetailFailed {
  static readonly type = '[Job] GetJobDetailFailed'
  constructor(public errors: Error[]) { }
}

export class PostJob {
  static readonly type = '[Job] PostJob';
  constructor(public jobRequest: JobRequest) { }
}

export class PostJobSuccess {
  static readonly type = '[Job] PostJobSuccess';
  constructor(public job: Job) { }
}

export class PostJobFailed {
  static readonly type = '[Job] PostJobFailed';
  constructor(public errors: Error[]) { }
}

export class DeleteJob {
  static readonly type = '[Job] DeleteJob';
  constructor(public jobId: string) { }
}

export class DeleteJobSuccess {
  static readonly type = '[Job] DeleteJobSuccess';
}

export class DeleteJobFailed {
  static readonly type = '[Job] DeleteJobFailed';
  constructor(public errors: Error[]) { }
}

export class ApplyJob {
  static readonly type = '[Job] ApplyJob';
  constructor(public jobId: string, public applicantUuid: string) { };
}

export class ApplyJobSuccess {
  static readonly type = '[Job] ApplyJobSuccess';
}

export class ApplyJobFailed {
  static readonly type = '[Job] ApplyJobFailed';
  constructor(public errors: Error[]) { }
}

export class GetJobApplicants {
  static readonly type = '[Job] GetJobApplicants';
}

export class GetJobApplicantsSuccess {
  static readonly type = '[Job] GetJobApplicantsSuccess';
}

export class GetJobApplicantsFailed {
  static readonly type = '[Job] GetJobApplicantsFailed';
  constructor(public errors: Error[]) { }
}

export class GetNewJobs {
  static readonly type = '[Job] GetNewJobs';
}

export class GetNewJobsSuccess {
  static readonly type = '[Job] GetNewJobsSuccess'
  constructor(public newJobs: []) { }
}

export class GetNewJobsFailed {
  static readonly type = '[Job] GetNewJobFailed'
  constructor(public errors: Error[]) { }
}