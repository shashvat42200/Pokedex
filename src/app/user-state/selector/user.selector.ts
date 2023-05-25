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

export const isLoggedIn = createSelector(
  createFeatureSelector("users"),
  (state: User) => !!state
);
export const user = createSelector(
  createFeatureSelector("users"),
  (state: User) => state
);
