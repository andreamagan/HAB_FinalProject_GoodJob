import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { StoreRoutingModule } from './store-routing.module';

import { AuthState } from './auth/auth.state';
import { ErrorState } from './error/error.state';
import { PlayerState } from './player/player.state'
//import { ProfileState } from './profile/profile.state';  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxsModule.forFeature([AuthState, ErrorState, PlayerState]) //Añadir Profilestate
  ],

})
export class StoreModule { }
