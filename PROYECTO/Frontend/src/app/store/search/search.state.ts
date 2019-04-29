import { State, Store, Action, StateContext, Selector } from "@ngxs/store";
import { SearchService } from 'src/app/modules/home/services/search.service';
import { tap, catchError, filter } from 'rxjs/operators';
import { SearchSuccess, Search, SearchFailed } from './search.actions';
import { SearchI } from 'src/app/shared/models/search.models';
import { SetErrors } from '../error/error.actions';
import { Logout } from '../auth/auth.actions';
import { Player } from 'src/app/shared/models/player.models';

@State<SearchI>({
  name: 'search',
  defaults: {
    results: []
  }
})

export class SearchState {
  constructor(private store: Store, private searchService: SearchService) { }

  @Selector()
  static search({ results }: SearchI) {
    return [...results];
  }

  @Action(Search)
  search(
    { dispatch }: StateContext<SearchI>,
    { keyword, collection }: Search) {
    return this.searchService.search(keyword, collection).pipe(
      tap(results => dispatch(new SearchSuccess(results))),
      catchError(error => dispatch(new SearchFailed(error.error))
      )
    );
  }

  @Action(SearchSuccess)
  searchSuccess(
    { patchState }: StateContext<SearchI>,
    { results }: SearchSuccess) {
    patchState({
      results
    });
  }

  @Action(SearchFailed)
  error(
    { dispatch }: StateContext<Search>,
    { errors }: any) {
    dispatch(new SetErrors(errors));
  }

  @Action(Logout)
  logout({ setState }: StateContext<Player>) {
    setState(null);
  }
}