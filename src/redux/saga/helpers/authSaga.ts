import { call, delay, put, takeEvery } from "redux-saga/effects";
import * as types from "../../types/actionTypes";
import {
  loginUserApi,
  signoutUserApi,
} from "../../../pages/loginsignup-services";
import { toast } from "react-toastify";
import { loginSuccess, logoutSuccess } from "../../actions/authActions";
import { saveToken } from "../../../services/AuthServices";

interface ILogoutResponse {
  status: number;
  message: string;
}

function* onLoginUserStartAsync(user: any) {
  try {
    //@ts-ignore
    const response: any = yield call(loginUserApi, user.payload.user);

    if (response.userdetails) {
      yield delay(500);
      yield saveToken(response.userdetails, response.accesstoken);
      yield put(loginSuccess(response.userdetails, response.accesstoken));
      yield toast.success(response.Message);
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLogoutUserStartAsync() {
  try {
    const response: ILogoutResponse = yield call(signoutUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(logoutSuccess());
      yield toast.success(response.message);
    }
  } catch (error) {
    console.log(error);
    // toast.error(error?.message);
  }
}

export function* onLoginUsers() {
  yield takeEvery(types.LOAD_USER_LOGIN, onLoginUserStartAsync);
}

export function* onLogoutUsers() {
  yield takeEvery(types.LOAD_USER_SIGNOUT, onLogoutUserStartAsync);
}
