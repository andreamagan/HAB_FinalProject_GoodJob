import { Component, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { JobState } from 'src/app/store/job/job.state';
import { Observable } from 'rxjs';
import { Jobs } from 'src/app/shared/models/job.model';
import { GetNewJobs } from 'src/app/store/job/job.actions';
import { PlayerState } from 'src/app/store/player/player.state';
import { Player } from 'src/app/shared/models/player.models';
import { SearchState } from 'src/app/store/search/search.state';
import { SearchI } from 'src/app/shared/models/search.models';


@Component({
  selector: 'esn-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  @Select(PlayerState) currentUser$: Observable<Player>;
  @Select(JobState.getNewJobs) jobs$: Observable<Jobs>;
  @Select(SearchState.searchJobs) searchJobs$: Observable<SearchI>;



  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetNewJobs());
  }

}