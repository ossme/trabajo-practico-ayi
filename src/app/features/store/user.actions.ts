// import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export enum TodosActionsTypes {
  FETCH_PENDING = '[USER ACTIONS: PENDING]',
  FETCH_FULFILLED = '[USER ACTIONS: FULFILLED]',
  FETCH_ERROR = '[USER ACTIONS: ERROR]',
  CLEAR_DATA = '[USER ACTIONS] CLEAR DATA',
}

export const FetchPending = createAction(
    '[USER ACTIONS: PENDING]'
);

export const FetchFulfilled = createAction(
    '[USER ACTIONS: FULFILLED]',
    props<{ user: User[] }>()
);

export const FetchError = createAction(
    '[USER ACTIONS: ERROR]',
    props<{ error: string }>()
);

export const ClearData = createAction(
    '[USER ACTIONS: CLEAR DATA]'
);

export const CreateData = createAction(
    '[USER ACTIONS: CREATE DATA]',
    props<{texto:string}>()
)