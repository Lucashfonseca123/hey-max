import {takeLeading, put, select} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';

import {
  login,
  loginSuccess,
  loginErrored,
  updateInfo,
  updateInfoSuccess,
  updateInfoErrored,
} from 'features/accredit/redux/reducer/accreditReducer';
import {IUpdateInfo} from '../types/AccreditationPayloadTypes';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {AppState} from 'store/RootReducer';

interface IUser {
  displayName?: string;
  email?: string;
  emailVerified?: boolean;
  isAnonymous?: false;
  metadata?: object;
  phoneNumber?: number;
  photoURL?: string;
  providerData?: object;
  providerId?: string;
  uid?: string;
}

interface IUserMatch {
  name: string;
  email: string;
  fullGame: boolean;
  progress: object[];
  statusFinished: object;
}

export function* watchLoginRequest() {
  yield takeLeading(login.type, workerLoginRequest);
  yield takeLeading(updateInfo.type, workerUpdateInfoRequest);
}

function* workerLoginRequest() {
  try {
    const {user} = yield GoogleSignin.signIn();
    let userMatch: IUserMatch = {
      fullGame: false,
      name: '',
      email: '',
      progress: [{}],
      statusFinished: {},
    };
    let collectionUser = firestore().collection('users');

    yield collectionUser.get().then((querySnapshot) => {
      // console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        if (documentSnapshot.data().email === user.email) {
          userMatch = documentSnapshot.data();
        }
      });
    });

    if (userMatch.email !== '') {
      yield put(loginSuccess(userMatch));
    } else {
      yield collectionUser.add({
        name: user.givenName,
        email: user.email,
        fullGame: false,
        progress: [
          {
            finished: false,
            menuId: 0,
            stageId: 0,
          },
        ],
        statusFinished: {
          status1: false,
          status2: false,
          status3: false,
          status4: false,
          status5: false,
        },
        created_at: firestore.FieldValue.serverTimestamp(),
      });
      yield put(
        loginSuccess({
          name: user.givenName,
          email: user.email,
          fullGame: false,
          progress: [
            {
              finished: false,
              menuId: 0,
              stageId: 0,
            },
          ],
          statusFinished: {
            status1: false,
            status2: false,
            status3: false,
            status4: false,
            status5: false,
          },
        }),
      );
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      yield put(loginErrored({message: 'Login não efetuado'}));
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      yield put(loginErrored({message: 'Login não progrediu'}));
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      yield put(loginErrored({message: 'Serviço não disponível'}));
      // play services not available or outdated
    } else {
      // some other error happened
      yield put(
        loginErrored({
          message:
            'Ocorreu um erro inesperado. Tente novamente em alguns segundos.',
        }),
      );
    }
  }
}

function* workerUpdateInfoRequest(action: typeof updateInfo) {
  try {
    const payload: IUpdateInfo = action.payload;
    let documentMatch: string;
    let collectionUser = firestore().collection('users');

    const emailUser = yield select(
      (appState: AppState) => appState.AccreditFeature.state.email,
    );

    yield collectionUser.get().then((querySnapshot) => {
      // console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        documentSnapshot.data();
        if (documentSnapshot.data().email === emailUser) {
          documentMatch = documentSnapshot.id;
        }
      });
    });

    if (documentMatch !== '') {
      yield firestore().collection('users').doc(documentMatch).update({
        fullGame: payload.fullGame,
        progress: payload.progress,
        statusFinished: payload.statusFinished,
      });
      yield put(updateInfoSuccess());
    }
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      yield put(updateInfoErrored({message: 'Login não efetuado'}));
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      yield put(updateInfoErrored({message: 'Login não progrediu'}));
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      yield put(updateInfoErrored({message: 'Serviço não disponível'}));
      // play services not available or outdated
    } else {
      // some other error happened
      yield put(
        updateInfoErrored({
          message:
            'Ocorreu um erro inesperado. Tente novamente em alguns segundos.',
        }),
      );
    }
  }
}
