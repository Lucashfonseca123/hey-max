import {fork} from 'redux-saga/effects';
import {watchSettingsRequest} from './settingsSaga';

export default function* settingsSaga() {
  yield fork(watchSettingsRequest);
}
