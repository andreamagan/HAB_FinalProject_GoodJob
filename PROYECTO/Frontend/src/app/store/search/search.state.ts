import { State, Store, Action, StateContext, Selector } from "@ngxs/store";
import { SearchService } from 'src/app/modules/home/services/search.service';
import { tap, catchError, filter } from 'rxjs/operators';
import { SearchSuccess, Search, SearchFailed } from './search.actions';
import { SearchI } from 'src/app/shared/models/search.models';
import { SetErrors } from '../error/error.actions';

@State<SearchI>({
  name: 'search',
  defaults: {
    searchJobs: [],
    searchPlayers: [],
    searchTeams: []
  }
})

export class SearchState {
  constructor(private store: Store, private searchService: SearchService) { }

  @Selector()
  static searchJobs({ searchJobs }: SearchI) {
    return [...searchJobs];
  }

  @Action(Search)
  search(
    { dispatch }: StateContext<SearchI>,
    { keyword }: Search,
    { collection }: Search) {
    return this.searchService.search(keyword, collection).pipe(
      tap(results => dispatch(new SearchSuccess(results))),
      catchError(error => dispatch(new SearchFailed(error.error))
      )
    );
  }

  @Action(SearchSuccess)
  searchJobsSuccess(
    { patchState }: StateContext<SearchI>,
    { results }: SearchSuccess) {
    patchState({
      searchJobs: results
    });
  }

  @Action(SearchFailed)
  error(
    { dispatch }: StateContext<Search>,
    { errors }: any) {
    dispatch(new SetErrors(errors));
  }

  // @Action(Search)
  // searchJobs(
  //   { dispatch }: StateContext<SearchI>,
  //   { keyword }: Search) {
  //   return this.searchService.searchJobs(keyword).pipe(
  //     tap(results => dispatch(new SearchSuccess(results))),
  //     catchError(error => dispatch(new SearchFailed(error.error))
  //     )
  //   );
  // }

  // @Action(SearchSuccess)
  // searchJobsSuccess(
  //   { patchState }: StateContext<SearchI>,
  //   { results }: SearchSuccess) {
  //   patchState({
  //     searchJobs: results
  //   });
  // }

  // @Action(SearchFailed)
  // error(
  //   { dispatch }: StateContext<Search>,
  //   { errors }: any) {
  //   dispatch(new SetErrors(errors));
  // }

}