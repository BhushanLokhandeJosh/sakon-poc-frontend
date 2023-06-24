import { fork, all } from "redux-saga/effects";
import { onLoginUsers } from "./helpers/authSaga";

const rootSagas = [fork(onLoginUsers)];

export default function* rootSaga() {
  yield all([...rootSagas]);
}
