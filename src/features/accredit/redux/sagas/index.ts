import {fork} from 'redux-saga/effects';
import {watchLoginRequest} from './Accreditation';

export default function* authenticationSaga() {
  yield fork(watchLoginRequest);
}
