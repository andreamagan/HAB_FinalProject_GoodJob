import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetJobDetail } from 'src/app/store/job/job.actions';

@Component({
  selector: 'esn-jobdetail',
  templateUrl: './job-detail.page.html',
  styleUrls: ['./job-detail.page.scss']
})
export class JobDetailPage implements OnInit {
  jobId = "null_2e963e7c-21b2-4c31-9966-a5e8b738affb";

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetJobDetail(this.jobId));
  }
}