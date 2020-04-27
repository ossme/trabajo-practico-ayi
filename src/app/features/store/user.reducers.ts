import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  data: any;
  pending: boolean;
  error: boolean;
  isFetchCompleted: boolean;
}

export const initialState: UserState = {
  data: null,
  pending: null,
  error: null,
  isFetchCompleted: null,
};

const userReducer = createReducer(
    initialState,
    on(UserActions.FetchPending, state => ({ ...state, pending: true })),
    on(UserActions.FetchFulfilled, (state, { user }) => {
        return { ...state, data: user, pending: false, isFetchCompleted: true }
    }),
    on(UserActions.FetchError, state => ({ ...state, error: true, pending: false })),
    on(UserActions.ClearData, state => (initialState)),
    on(UserActions.CreateData, (state, { user }) => ({...state, data:user}))
  );
  
export function reducer(state: UserState | undefined, action: Action) {
    return userReducer(state, action);
}