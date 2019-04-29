import { Component, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PlayerState } from 'src/app/store/player/player.state';
import { Observable } from 'rxjs';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { TeamState } from 'src/app/store/team/team.state';
import { Team } from '../../models/team.models';

@Component({
  selector: 'esn-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  imageUrl = '';

  @Input()
  set user(user: any) {
    if ((user.avatarUrl !== undefined || user.avatarUrl !== null) && user.accountInfo.role == "player") {
      this.imageUrl = user.avatarUrl || `https://avatars.dicebear.com/v2/avataaars/${user.accountInfo.uuid}.svg`;
    } else if ((user.avatarUrl !== undefined || user.avatarUrl !== null) && user.accountInfo.role == "team") {
      this.imageUrl = user.avatarUrl || `https://avatars.dicebear.com/v2/jdenticon/${user.accountInfo.uuid}.svg`;
    }
  }

  @Input() width = 'auto';
  @Input() height = 'auto';
} 