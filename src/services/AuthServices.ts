import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { API_ROUTES } from "../routes/routes-constants";
import { loginSuccess, logoutStart } from "../redux/actions/authActions";

export const getToken = () => {
  const tokenString: string | null = sessionStorage.getItem("token");
  if (tokenString) {
    const userToken = JSON.parse(tokenString);
    return userToken;
  } else return;
};

export const getUser = () => {
  const userString: string | null = sessionStorage.getItem("user");
  if (userString) {
    const user_detail = JSON.parse(userString);
    return user_detail;
  } else return;
};

export const saveToken = (user: {}, token: string) => {
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const removeToken = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
};

export const checkAutoLogin = (dispatch: Dispatch<any>, navigate: any) => {
  const tokenDetails = getToken();
  const userDetails = getUser();

  if (!tokenDetails) {
    dispatch(logoutStart());
    navigate(API_ROUTES.HOME);
    return;
  } else {
    dispatch(loginSuccess(userDetails, tokenDetails));
  }
};
