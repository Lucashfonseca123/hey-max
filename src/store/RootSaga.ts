import {fork, all} from 'redux-saga/effects';
import settingSagas from 'features/settings/redux/sagas';

export default function* rootSaga() {
  yield all([fork(settingSagas)]);
}
