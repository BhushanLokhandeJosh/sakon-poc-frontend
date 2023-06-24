import * as types from "../types/actionTypes";
import { initialState } from "../initialState";

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_USER_LOGIN:
      return { ...state, loading: true };

    case types.LOAD_USER_SIGNOUT:
      return { ...state, loading: true };

    case types.ERROR_USER_LOGIN:
      return { ...state, loading: false, error: action.payload };

    case types.ERROR_USER_SIGNOUT:
      return { ...state, loading: false, error: action.payload };

    case types.SUCCESS_USER_LOGIN:
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload.user,
        loggedInUserToken: action.payload.token,
      };

    case types.SUCCESS_USER_SIGNOUT:
      return {
        ...state,
        loading: false,
        loggedInUser: {},
        loggedInUserToken: {},
      };

    default:
      return state;
  }
};

export default AuthReducer;
