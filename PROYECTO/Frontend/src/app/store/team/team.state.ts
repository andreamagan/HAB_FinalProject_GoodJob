import { Store, State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

import { Team } from 'src/app/shared/models/team.models';
import { TeamService } from 'src/app/modules/profile/services/team.service';
import { GetTeamProfile, GetTeamProfileFailed, GetTeamProfileSuccess, UpdateTeamProfileFailed, UpdateTeamProfile, UpdateTeamProfileSuccess } from './team.actions';
import { SetErrors } from '../error/error.actions';
import { Logout } from '../auth/auth.actions';



@State<Team>({
  name: 'team',
})

export class TeamState {
  constructor(private store: Store, private teamService: TeamService) { }

  @Action(GetTeamProfile)
  getTeamProfile({ dispatch }: StateContext<Team>) {
    return this.teamService.getTeamProfile().pipe(
      tap(profileResponse => dispatch(new GetTeamProfileSuccess(profileResponse))
      ),
      catchError(error => dispatch(new GetTeamProfileFailed(error.error))
      )
    );
  }

  @Action(GetTeamProfileSuccess)
  getTeamProfileSuccess(
    { patchState }: StateContext<Team>,
    { profile }: GetTeamProfileSuccess
  ) {
    patchState({ ...profile });
  }

  @Action(UpdateTeamProfile, { cancelUncompleted: true })
  updateTeamProfile(
    { dispatch }: StateContext<Team>, { profile }: UpdateTeamProfile) {
    return this.teamService.updateTeamProfile(profile).pipe(
      tap(() => dispatch(new UpdateTeamProfileSuccess())),
      catchError(error => dispatch(new UpdateTeamProfileFailed(error.error))
      )
    );
  }

  @Action(UpdateTeamProfileSuccess)
  updateTeamProfileSuccess(
    { patchState, dispatch }: StateContext<Team>,
    { profile }: UpdateTeamProfile
  ) {
    patchState({ ...profile });
    dispatch(new GetTeamProfile);
  }

  @Action([GetTeamProfileFailed, UpdateTeamProfileFailed])
  error({ dispatch }: StateContext<Team>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

  @Action(Logout)
  logout({ setState }: StateContext<Team>) {
    setState(null);
  }
}