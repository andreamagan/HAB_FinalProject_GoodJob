import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailPage } from './page/job-detail.page';

@NgModule({
  declarations: [JobDetailPage],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
