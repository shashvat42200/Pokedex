import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable, from, of } from "rxjs";
import { AppState } from "../reducers/user.reducer";
import { Store, select } from "@ngrx/store";
import { currentUserLogin, isLoggedIn } from "../selector/user.selector";
import { tap } from "rxjs/operators";
import { User } from "src/app/classes/user";
import { AppService } from "src/app/components/app.service";
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private appService: AppService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    this.store.dispatch({ type: "Get User Success" });
    return of(true);
  }
}
