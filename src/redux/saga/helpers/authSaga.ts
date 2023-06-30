import { call, delay, put, takeEvery } from "redux-saga/effects";
import * as types from "../../types/actionTypes";
import {
  loginUserApi,
  signoutUserApi,
} from "../../../pages/loginsignup-services";
import { toast } from "react-toastify";
import { loginSuccess, logoutSuccess } from "../../actions/authActions";
import { saveToken } from "../../../services/AuthServices";
import { API_ROUTES } from "../../../routes/routes-constants";

function* onLoginUserStartAsync(user: any) {
  try {
    //@ts-ignore
    const response: any = yield call(loginUserApi, user.payload.user);

    if (response.userdetails) {
      console.log("In Login Saga", response);
      yield delay(500);
      yield saveToken(response.userdetails, response.accesstoken);
      yield put(loginSuccess(response.userdetails, response.accesstoken));
      yield user.payload.navigate(API_ROUTES.DASHBOARD);
      yield toast.success(response.Message);
    }
  } catch (error) {
    // yield put(loginError(error?.message));
    // yield user.payload.navigate(ROUTES.ERROR);
  }
}

function* onLogoutUserStartAsync() {
  // try {
  //@ts-ignore
  const response: any = yield call(signoutUserApi);
  if (response.status === 200) {
    console.log("In Logout Saga");
    yield delay(500);
    yield put(logoutSuccess());
    yield toast.success(response.message);
  }
  // } catch (error) {
  //   yield put(logoutError(error.message));
  // }
}

export function* onLoginUsers() {
  yield takeEvery(types.LOAD_USER_LOGIN, onLoginUserStartAsync);
}

export function* onLogoutUsers() {
  yield takeEvery(types.LOAD_USER_SIGNOUT, onLogoutUserStartAsync);
}
