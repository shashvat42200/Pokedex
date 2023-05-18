import { Injectable } from "@angular/core";
import { AppService } from "src/app/components/app.service";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import {
  getUsers,
  getUsersFailure,
  getUsersSuccess,
} from "../actions/user.action";
import { catchError, exhaustMap, map, mergeMap, switchMap } from "rxjs";
import { of } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class getUsersEffect {
  authenticateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap((action) =>
        this.appService.getUserInfo(action.email, action.password).pipe(
          map((userData) => {
            if (Object.keys(userData).length == 0)
              return getUsersFailure({ error: "Authentication Failed" });
            else {
              return getUsersSuccess(userData);
            }
          })
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private appService: AppService,
    private router: Router
  ) {}
}
