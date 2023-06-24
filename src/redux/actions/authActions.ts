import * as types from "../types/actionTypes";

export const loginStart = (user: any) => ({
  type: types.LOAD_USER_LOGIN,
  payload: { user },
});

export const loginSuccess = (user: Object, token: string) => ({
  type: types.SUCCESS_USER_LOGIN,
  payload: { user, token },
});

export const loginError = (error: string) => ({
  type: types.ERROR_USER_LOGIN,
  payload: error,
});

//Logout actions.
export const logoutStart = () => ({
  type: types.LOAD_USER_SIGNOUT,
});

export const logoutSuccess = () => ({
  type: types.SUCCESS_USER_SIGNOUT,
});

export const logoutError = (error: string) => ({
  type: types.ERROR_USER_SIGNOUT,
  payload: error,
});
