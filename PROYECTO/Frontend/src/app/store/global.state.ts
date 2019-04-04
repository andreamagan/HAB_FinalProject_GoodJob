import { RegisterSuccess, LoginFailed, RegisterFailed, LoginSuccess, Register, Login } from './auth/auth.actions';
import { StateContext, Action, Selector, State } from '@ngxs/store';
import { Global } from '../shared/models/global.model';

@State<Global>({
  name: 'global',
  defaults: {
    isFetching: false
  }
})
export class GlobalState {
  @Selector()
  static isFetching({ isFetching }: Global) {
    return isFetching;
  }

  @Action([Login, Register])
  startFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: true });
  }

  @Action([
    LoginSuccess,
    RegisterSuccess,
    LoginFailed,
    RegisterFailed,

  ])
  endFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: false });
  }
}