import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/users.service';
 
@Injectable()
export class UserEffects {
 
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[USER ACTIONS: PENDING]'),
      mergeMap(() => this.userService.getUsers()
        .pipe(
          map(user => {
               console.log('effect', user);
              return { type: '[USER ACTIONS: FULFILLED]', user }
          }),
          catchError(() => of({ type: '[USER ACTIONS: ERROR]' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}