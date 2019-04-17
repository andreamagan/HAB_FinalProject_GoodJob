import { Store, State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

import { Team } from 'src/app/shared/models/team.models';
import { TeamService } from 'src/app/modules/profile/services/team.service';
import { GetTeamProfile, GetTeamProfileSuccess, GetTeamProfileFailed } from './team.actions';
import { SetErrors } from '../error/error.actions';


@State<Team>({
  name: 'team',
  // defaults: {
  //   "personalInfo": {
  //     "social": {
  //       "twitterUrl": null,
  //       "twichUrl": null,
  //       "instagramUrl": null
  //     },
  //     "fullName": 'Default name',
  //     "nickName": 'Default nickname',
  //     "description": 'Default description'
  //   },
  //   "tags": [],
  //   "accountInfo": {
  //     "email": "src\assets\avatar.png",
  //     "password": null,
  //     "createdAt": null,
  //     "activatedAt": null,
  //     "verificationCode": null,
  //     "uuid": null,
  //     "role": null,
  //   },
  //   "avatarUrl": null,
  //   "team": 'GJD',
  //   "background": {
  //     "experience": [
  //       {
  //         "_id": null,
  //         "company": null,
  //         "job": null,
  //         "dateStart": null,
  //         "dateEnd": null
  //       }
  //     ],
  //     "education": [
  //       {
  //         "_id": null,
  //         "school": null,
  //         "degree": null,
  //         "dateStart": null,
  //         "dateEnd": null
  //       }
  //     ]
  //   }
  // }
})

export class TeamState {
  constructor(private store: Store, private playerService: TeamService) { }

  @Action(GetTeamProfile)
  getTeamProfile({ dispatch }: StateContext<Team>) {
    return this.playerService.getTeamProfile().pipe(
      tap(profileResponse =>
        dispatch(new GetTeamProfileSuccess(profileResponse))
      ),
      catchError(error => dispatch(new GetTeamProfileFailed(error.error))
      )
    );
  }

  @Action(GetTeamProfileSuccess)
  getUserProfileSuccess(
    { patchState }: StateContext<Team>,
    { profile }: GetTeamProfileSuccess
  ) {
    patchState({ ...profile });
  }



}