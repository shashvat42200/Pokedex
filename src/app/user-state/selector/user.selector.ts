import { User } from "src/app/classes/user";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const currentUserLogin = createSelector(
  createFeatureSelector("users"),
  (state: User[]) => {
    const shirtOption = { ...state };
    const shirtsArray: User[] = [];
    Object.keys(shirtOption).forEach((key: any) => {
      shirtsArray.push({ ...shirtOption[key] });
    });
    return shirtsArray;
  }
);
export const selectAuthState = createFeatureSelector<Object>("users");
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth["user"].error
);
