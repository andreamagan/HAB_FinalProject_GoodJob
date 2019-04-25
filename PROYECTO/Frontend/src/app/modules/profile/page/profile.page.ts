import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { PlayerState } from 'src/app/store/player/player.state';
import { Observable } from 'rxjs';
import { Player } from 'src/app/shared/models/player.models';


@Component({
  selector: 'esn-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {
  @Select(PlayerState) player$: Observable<Player>;

  constructor(private store: Store, ) {

  }

}
