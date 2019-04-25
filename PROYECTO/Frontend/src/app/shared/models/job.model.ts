export interface Job {
  team: Object,
  jobId: string,
  title: string,
  description: string,
  createdAt: number,
  deletedAt: number,
  tags: [],
  applicants: [],
}

export interface JobRequest {
  title: string,
  description: string,
  tags: [],
}

export interface Jobs {
  jobDetail: {},
  newJobs: [],
}