import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';


@Component({
  selector: 'esn-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() user;

  avatarDefault = '../../../../assets/avatar.png';
  teamDefault = '../../../../assets/team-default.png';

  // @Input()
  // set player(player: any) {
  //   if (player.avatarUrl !== undefined) {
  //     this.imageUrl =
  //       player.avatarUrl || `https://api.adorable.io/avatars/128/${player.acountInfo.uuid}`;
  //   }
  // }

  // if (user.team !== undefined) {
  //   this.teamDefault = '../../../../assets/team-default.png'
  // }
}