import {takeLatest, delay, put, call} from 'redux-saga/effects';

import {finishedAction, finishedStateSuccess} from '../reducer/settingsReducer';

export function* watchSettingsRequest() {
  yield takeLatest(finishedAction.type, workerSettings);
}

function* workerSettings() {
  try {
    yield delay(1000);

    yield put(finishedStateSuccess());
  } catch (err) {
    console.log(err);
  }
}
