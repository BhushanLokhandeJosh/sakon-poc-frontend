import { fork, all } from "redux-saga/effects";
import { onLoginUsers, onLogoutUsers } from "./helpers/authSaga";

const rootSagas = [fork(onLoginUsers), fork(onLogoutUsers)];

export default function* rootSaga() {
  yield all([...rootSagas]);
}
