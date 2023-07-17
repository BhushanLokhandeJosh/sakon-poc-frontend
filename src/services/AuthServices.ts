import { Dispatch } from "react";
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
  const tokenString: string | null = sessionStorage.getItem("token");
  if (userString && tokenString) {
    const userDetails = JSON.parse(userString);
    const tokenDetails = JSON.parse(tokenString);
    return {
      userDetails,
      tokenDetails,
    };
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
  const response = getUser();

  if (!response?.tokenDetails) {
    dispatch(logoutStart());
    navigate(API_ROUTES.LOGIN);
    return;
  } else {
    dispatch(loginSuccess(response?.userDetails, response?.tokenDetails));
  }
};
