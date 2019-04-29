import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PlayerState } from 'src/app/store/player/player.state';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player.models';
import { Jobs } from 'src/app/shared/models/job.model';
import { JobState } from 'src/app/store/job/job.state';
import { TeamState } from 'src/app/store/team/team.state';
import { Team } from 'src/app/shared/models/team.models';


@Component({
  selector: 'esn-myaccount',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage {
  @Select(PlayerState) player$: Observable<Player>;
  @Select(TeamState) team$: Observable<Team>;

  profileImageUrl: string;

  constructor() { }

  ngOnInit() {
    this.player$.subscribe(player => {
      if (player.profileInfo && player.avatarUrl) {
        this.profileImageUrl = player.avatarUrl;
      } else {
        this.profileImageUrl = `https://avatars.dicebear.com/v2/avataaars/${player.accountInfo.uuid}.svg`;

      }
    })
    this.team$.subscribe(team => {
      if (team.profileInfo && team.avatarUrl) {
        this.profileImageUrl = team.avatarUrl;
      } else {
        this.profileImageUrl = `https://avatars.dicebear.com/v2/jdenticon/${team.accountInfo.uuid}.svg`;

      }
    })
  }
}
