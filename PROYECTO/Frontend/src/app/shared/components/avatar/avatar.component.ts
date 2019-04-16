import { Component, Input } from '@angular/core';

@Component({
  selector: 'esn-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  avatarDefault = '';
  teamDefault = '';

  @Input()
  set user(user: any) {
    if (user.avatarUrl !== undefined) {
      this.avatarDefault = user.avatarUrl || '../../../../assets/avatar.png'
    }
    if (user.team !== undefined) {
      this.teamDefault = '../../../../assets/team-default.png'
    }
  }
  constructor() { }

}
