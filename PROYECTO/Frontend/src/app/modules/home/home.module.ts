import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePage } from './page/home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [HomePage, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
