import { Player } from 'src/app/shared/models/player.models';
import { Error } from 'src/app/shared/models/error.models';


export class GetPlayerProfile {
  static readonly type = '[Player] GetPlayerProfile';
}

export class GetPlayerProfileSuccess {
  static readonly type = '[Player] GetPlayerProfileSucces';
  constructor(public profile: Player) { }
}

export class GetPlayerProfileFailed {
  static readonly type = '[Player] GetPlayerProfileFailed'
  constructor(public error: Error) { }
}

export class UpdatePlayerProfile {
  static readonly type = '[Auth] UpdateUserProfile';
  constructor(public profile: Player) { }
}

export class UpdatePlayerProfileSuccess {
  static readonly type = '[Auth] UpdateUserProfileSuccess';
  constructor(public profile: Player) { }
}

export class UpdatePlayerProfileFailed {
  static type = '[Auth] UpdateUserProfileFailed';
  constructor(public errors: Error[]) { }
}