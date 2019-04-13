import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './page/about.page';


@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
