import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team.models';
import { TeamState } from 'src/app/store/team/team.state';

@Component({
  selector: 'esn-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  @Select(TeamState) team$: Observable<Team>;

  constructor() { }

  ngOnInit() {
  }

}
