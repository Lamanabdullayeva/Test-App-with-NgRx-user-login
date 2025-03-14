import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    user: null,
  })),
  on(AuthActions.logout, () => initialState)
);
