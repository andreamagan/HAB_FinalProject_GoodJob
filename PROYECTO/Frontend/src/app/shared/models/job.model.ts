export interface Job {
  team: string,
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

export interface JobDetail {
  tags: string[];
  applicants: any[];
  team: string;
  jobId: string;
  title: string;
  description: string;
  createdAt: number;
  deletedAt: number;
}