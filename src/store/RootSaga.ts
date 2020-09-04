import {fork, all} from 'redux-saga/effects';
import loginRequest from 'features/accredit/redux/sagas';

export default function* rootSaga() {
  yield all([fork(loginRequest)]);
}
