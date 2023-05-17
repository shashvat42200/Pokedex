import { createReducer, on } from "@ngrx/store";
import { getUsersFailure, getUsersSuccess } from "../actions/user.action";

export interface AppState {}
export const initialState: object = {};

export const userReducer = createReducer(
  initialState,
  on(getUsersSuccess, (state, user) => user),
  on(getUsersFailure, (state, user) => user)
);
