import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { StoreRoutingModule } from './store-routing.module';

import { AuthState } from './auth/auth.state';
import { ErrorState } from './error/error.state';
//import { ProfileState } from './profile/profile.state';  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreRoutingModule,
    NgxsModule.forFeature([AuthState, ErrorState,]) //Añadir Profilestate
  ]
})
export class StoreModule { }
