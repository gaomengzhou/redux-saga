import { put, takeLatest } from "redux-saga/effects"; //call, put, takeEvery,
import { increment } from "../action/counter";
function* helloSaga(param) {
  yield console.log(param);
  yield put(increment());
}

function* jianSaga() {
  yield put({ type: "DECREMENT" });
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", helloSaga);
  yield takeLatest("JIAN", jianSaga);
}

export default mySaga;
