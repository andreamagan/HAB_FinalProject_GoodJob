import { Store, State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';

import { Auth } from 'src/app/shared/models/auth.models';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { Login, LoginSuccess, LoginFailed, Register, RegisterSuccess, RegisterFailed } from './auth.actions';
import { SetErrors } from '../error/error.actions';


@State<Auth>({
  name: 'auth',
  defaults: {
    ...JSON.parse(localStorage.getItem('auth'))
  }
})

export class AuthState {
  constructor(private store: Store, private authService: AuthService) { }

  @Action(Login, { cancelUncompleted: true })
  login({ dispatch }: StateContext<Auth>, action: Login) {
    return this.authService.login(action.login).pipe(
      tap(data => dispatch(new LoginSuccess(data))),
      catchError(error => dispatch(new LoginFailed(error.error)))
    );
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState, dispatch }: StateContext<Auth>,
    { loginResponse }: LoginSuccess
  ) {
    patchState({ ...loginResponse });

    dispatch(new Navigate(['/home']));
  }

  @Action(Register)
  register({ dispatch }: StateContext<Auth>, action: Register) {
    return this.authService.register(action.register).pipe(
      tap(() => dispatch(new RegisterSuccess())),
      catchError(error => dispatch(new RegisterFailed(error.error)))
    );
  }
  @Action(RegisterSuccess)
  registerSuccess(ctx: StateContext<Auth>) { }


  @Action([
    LoginFailed,
    RegisterFailed,
  ])
  error({ dispatch }: StateContext<Auth>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }
}