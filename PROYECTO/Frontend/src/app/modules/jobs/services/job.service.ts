import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Job } from 'src/app/shared/models/job.model';

@Injectable({ providedIn: 'root' })
export class JobService {
  constructor(private http: HttpClient) { }

  getJobDetail(jobId: string) {
    return this.http.get<Job>(`${environment.apiBaseUrl}/job?jobId=${jobId}`);
  }

  postJob(title: string, description: string, tags: []) {
    return this.http.post<Job>(`${environment.apiBaseUrl}/job`,
      {
        title,
        description,
        tags
      });
  }

  deleteJob(jobId: string) {
    return this.http.put<Job>(`${environment.apiBaseUrl}/job${jobId}`, {})
  }

  getJobApplicants(jobId: string) {
    return this.http.get<Job>(`${environment.apiBaseUrl}/job/applicants${jobId}`);
  }

  applyJob(jobId: string) {
    return this.http.put<Job>(`${environment.apiBaseUrl}/job${jobId}`, {
    });
  }

  getNewJobs() {
    return this.http.get<any>(`${environment.apiBaseUrl}/jobs`);
  }

}
