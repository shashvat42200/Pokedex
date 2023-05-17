import { createReducer, on } from "@ngrx/store";
import { getUsersSuccess } from "../actions/user.action";

export const initialState: object = {};

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, user) => user)
);
