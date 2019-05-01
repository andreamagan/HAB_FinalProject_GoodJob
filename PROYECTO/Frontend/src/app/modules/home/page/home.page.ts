import { Component, Input, OnInit } from '@angular/core';
import { Store, Select, StateContext } from '@ngxs/store';
import { JobState } from 'src/app/store/job/job.state';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/shared/models/job.model';
import { GetNewJobs } from 'src/app/store/job/job.actions';
import { PlayerState } from 'src/app/store/player/player.state';
import { Player } from 'src/app/shared/models/player.models';
import { SearchState } from 'src/app/store/search/search.state';
import { SearchI } from 'src/app/shared/models/search.models';
import { Team } from 'src/app/shared/models/team.models';
import { TeamState } from 'src/app/store/team/team.state';


@Component({
  selector: 'esn-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  @Select(PlayerState) player$: Observable<Player>;
  @Select(TeamState) team$: Observable<Team>;
  @Select(JobState.getNewJobs) jobs$: Observable<Jobs>;
  @Select(SearchState.search) search$: Observable<SearchI>;

  isPlayer: Boolean;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetNewJobs());

    const currentUser = this.store.selectSnapshot(state => state.auth);

    if (currentUser.role === "player") {
      return this.isPlayer = true;
    }
    return this.isPlayer = false;
  }
}