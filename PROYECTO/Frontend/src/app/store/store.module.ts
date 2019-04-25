import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { StoreRoutingModule } from './store-routing.module';

import { AuthState } from './auth/auth.state';
import { ErrorState } from './error/error.state';
import { PlayerState } from './player/player.state'
import { JobState } from './job/job.state';
import { SearchState } from './search/search.state';
//import { ProfileState } from './profile/profile.state';  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxsModule.forFeature([AuthState, ErrorState, PlayerState, JobState, SearchState]) //Añadir Profilestate
  ],

})
export class StoreModule { }
