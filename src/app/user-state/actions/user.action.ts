import { createAction, props } from "@ngrx/store";
import { User } from "src/app/classes/user";

export const getUsers = createAction(
  "Get Users",
  props<{ email: string; password: string }>()
);
export const getUsersSuccess = createAction(
  "Get User Success",
  props<{ user: User }>()
);
export const getUsersFailure = createAction(
  "Get User Failure",
  props<{ error: string }>()
);
