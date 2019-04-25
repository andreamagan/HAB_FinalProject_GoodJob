import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { PlayerState } from 'src/app/store/player/player.state';
import { Player } from 'src/app/shared/models/player.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'esn-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Select(PlayerState) player$: Observable<Player>;

  constructor() { }

  ngOnInit() {
  }

}
