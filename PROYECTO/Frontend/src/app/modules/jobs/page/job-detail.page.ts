import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetJobDetail, ApplyJob } from 'src/app/store/job/job.actions';
import { ActivatedRoute } from '@angular/router';
import { JobState } from 'src/app/store/job/job.state';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/shared/models/job.model';
import { PlayState } from '@angular/core/src/render3/interfaces/player';

@Component({
  selector: 'esn-jobdetail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss']
})
export class JobDetailPage implements OnInit {
  @Select(JobState) jobs$: Observable<Jobs>
  //@Select(JobState.getNewJobs) newjobs$: Observable<Jobs>;

  constructor(private store: Store,
    private route: ActivatedRoute,
    private element: ElementRef,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.store.dispatch(new GetJobDetail(routeParams.jobId));

      this.element.nativeElement.parentElement.scrollTop = 0;
    });
  }
  jobId: string;

  apply() {
    const currentUser = this.store.selectSnapshot(state => state.player);
    const applicantUuid = currentUser.accountInfo.uuid
    const currentJob = this.store.selectSnapshot(state => state.jobs);
    const jobId = currentJob.jobDetail.jobId;
    // let jobId = "";
    // this.jobs$.subscribe(jobs => {
    //   const jobDetail = jobs.jobDetail
    //   jobId = jobDetail.jobId;
    // });

    this.store.dispatch(new ApplyJob(jobId, applicantUuid))
  }
}