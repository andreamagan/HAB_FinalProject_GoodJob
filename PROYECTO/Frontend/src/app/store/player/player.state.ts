import { Store, State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

import { Player } from 'src/app/shared/models/player.models';
import { PlayerService } from 'src/app/modules/profile/services/player.service';
import { GetPlayerProfile, GetPlayerProfileSuccess, GetPlayerProfileFailed, UpdatePlayerProfile, UpdatePlayerProfileSuccess, UpdatePlayerProfileFailed } from './player.actions';
import { SetErrors } from '../error/error.actions';
import { Logout } from '../auth/auth.actions';


@State<Player>({
  name: 'player',
})

export class PlayerState {
  constructor(private store: Store, private playerService: PlayerService) { }

  @Action(GetPlayerProfile)
  getPlayerProfile(
    { dispatch }: StateContext<Player>) {
    return this.playerService.getPlayerProfile().pipe(
      tap(profileResponse => dispatch(new GetPlayerProfileSuccess(profileResponse))
      ),
      catchError(error => dispatch(new GetPlayerProfileFailed(error.error))
      )
    );
  }

  @Action(GetPlayerProfileSuccess)
  getUserProfileSuccess(
    { patchState }: StateContext<Player>,
    { profile }: GetPlayerProfileSuccess
  ) {
    patchState({ ...profile });
  }

  @Action(UpdatePlayerProfile, { cancelUncompleted: true })
  updatePlayerProfile(
    { dispatch }: StateContext<Player>, { profile }: UpdatePlayerProfile) {
    return this.playerService.updatePlayerProfile(profile).pipe(
      tap(() => dispatch(new UpdatePlayerProfileSuccess())),
      catchError(error => dispatch(new UpdatePlayerProfileFailed(error.error))
      )
    );
  }

  @Action(UpdatePlayerProfileSuccess)
  updatePlayerProfileSuccess(
    { patchState, dispatch }: StateContext<Player>,
    { profile }: UpdatePlayerProfile
  ) {
    patchState({ ...profile });
    dispatch(new GetPlayerProfile);
  }

  @Action([GetPlayerProfileFailed, UpdatePlayerProfileFailed])
  error({ dispatch }: StateContext<Player>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }


  @Action(Logout)
  logout({ setState }: StateContext<Player>) {
    setState(null);
  }

}
