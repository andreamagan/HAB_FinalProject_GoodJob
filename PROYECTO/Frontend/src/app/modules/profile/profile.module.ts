import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { PlayerComponent } from './components/player/player.component';
import { ProfilePage } from './page/profile.page';
import { SocialComponent } from './components/social/social.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NickAnimationComponent } from './components/nick-animation/nick-animation.component';
import { TeamComponent } from './components/team/team.component';
import { NgxsModule } from '@ngxs/store';
import { PlayerState } from 'src/app/store/player/player.state';
import { TeamState } from 'src/app/store/team/team.state';


@NgModule({
  declarations: [PlayerComponent, TeamComponent, ProfilePage, SocialComponent, NickAnimationComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    SharedModule,
    FontAwesomeModule,
    NgxsModule.forFeature([PlayerState, TeamState])
  ]
})
export class ProfileModule { }
