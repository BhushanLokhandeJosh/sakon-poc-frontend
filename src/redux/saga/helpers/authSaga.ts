import { call, delay, put, takeEvery } from "redux-saga/effects";
import * as types from "../../types/actionTypes";
import { loginUserApi } from "../../../pages/loginsignup-services";
import { toast } from "react-toastify";
import { loginSuccess } from "../../actions/action";

function* onLoginUserStartAsync(user: any) {
  try {
    //@ts-ignore
    const response: any = yield call(loginUserApi, user.payload.user);

    if (response.userdetails) {
      console.log("Saga Service", response);
      yield delay(500);
      yield put(loginSuccess(response.userdetails, response.accesstoken));
      //   yield user.payload.navigate(user.payload.from);
      yield toast.success(response.Message);
    }
  } catch (error) {
    // yield put(loginError(error?.message));
    // yield user.payload.navigate(ROUTES.ERROR);
  }
}

export function* onLoginUsers() {
  yield takeEvery(types.LOAD_USER_LOGIN, onLoginUserStartAsync);
}
