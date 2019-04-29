import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailPage } from './page/job-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [JobDetailPage],
  imports: [
    CommonModule,
    JobsRoutingModule,
    SharedModule
  ]
})
export class JobsModule { }
