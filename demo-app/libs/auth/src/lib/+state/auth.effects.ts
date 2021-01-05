import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { AuthActionTypes } from './auth.actions';

import * as AuthFeature from './auth.reducer';
import * as AuthActions from './auth.actions';
import { AuthService } from './../services/auth/auth.service';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.Login),
    fetch({
      run: action => {
        return AuthActions.loginSuccess(action);
      },
      onError: (action, error) => {
        return AuthActions.loginFailure(error);
      }
    })
  )

  @Effect({dispatch: false})
  navigateToProfile$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: AuthActions.AuthActionTypes.LoginSuccess) => action),
    tap(() => this.router.navigate(['/products']))
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
  /*
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AuthActions.loadAuthSuccess({ auth: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loadAuthFailure({ error });
        },
      })
    )
  );
  */

}
