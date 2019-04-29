import { Team } from 'src/app/shared/models/team.models';
import { Error } from 'src/app/shared/models/error.models';


export class GetTeamProfile {
  static readonly type = '[Team] GetTeamProfile';
}

export class GetTeamProfileSuccess {
  static readonly type = '[Team] GetTeamProfileSuccess';
  constructor(public profile: Team) { }
}

export class GetTeamProfileFailed {
  static readonly type = '[Team] GetTeamProfileFailed'
  constructor(public error: Error) { }
}

export class UpdateTeamProfile {
  static readonly type = '[Auth] UpdateUserProfile';
  constructor(public profile: Team) { }
}

export class UpdateTeamProfileSuccess {
  static readonly type = '[Auth] UpdateUserProfileSuccess';
}

export class UpdateTeamProfileFailed {
  static type = '[Auth] UpdateUserProfileFailed';
  constructor(public errors: Error[]) { }
}