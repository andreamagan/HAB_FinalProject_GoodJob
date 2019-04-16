import { Store, State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

import { Player } from 'src/app/shared/models/player.models';
import { PlayerService } from 'src/app/modules/profile/player.service';
import { GetPlayerProfile, GetPlayerProfileSuccess, GetPlayerProfileFailed } from './player.actions';
import { SetErrors } from '../error/error.actions';


@State<Player>({
  name: 'player',
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

export class PlayerState {
  constructor(private store: Store, private playerService: PlayerService) { }

  @Action(GetPlayerProfile)
  getPlayerProfile({ dispatch }: StateContext<Player>) {
    return this.playerService.getPlayerProfile().pipe(
      tap(profileResponse =>
        dispatch(new GetPlayerProfileSuccess(profileResponse))
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



}