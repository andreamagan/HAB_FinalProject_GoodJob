import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'esn-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input() job;
  @Input() type;

  constructor(private router: Router) { }

  navigateToDetail(jobId: string) {
    this.router.navigate(['/job', jobId]);
  }

}
