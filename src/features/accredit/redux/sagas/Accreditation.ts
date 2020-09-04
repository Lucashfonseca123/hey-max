import {takeLeading, put} from 'redux-saga/effects';
import firestore from '@react-native-firebase/firestore';

import {
  login,
  loginSuccess,
  loginErrored,
} from 'features/accredit/redux/reducer/accreditReducer';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';

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
  fullGame: boolean;
  progress: object[];
  statusFinished: object;
}

export function* watchLoginRequest() {
  yield takeLeading(login.type, workerLoginRequest);
}

function* workerLoginRequest() {
  try {
    const {user} = yield GoogleSignin.signIn();
    let userMatch: IUserMatch = {
      fullGame: false,
      name: '',
      progress: [{}],
      statusFinished: {},
    };
    let collectionUser = firestore().collection('users');

    yield collectionUser.get().then((querySnapshot) => {
      console.log('Total users: ', querySnapshot.size);

      querySnapshot.forEach((documentSnapshot) => {
        documentSnapshot.data();
        if (documentSnapshot.data().email === user.email) {
          userMatch = documentSnapshot.data();
        }
      });
    });

    if (userMatch.email && userMatch.email !== '') {
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
      loginErrored({message: 'Login não efetuado'});
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      loginErrored({message: 'Login não progrediu'});
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      loginErrored({message: 'Serviço não disponível'});
      // play services not available or outdated
    } else {
      // some other error happened
      loginErrored({
        message:
          'Ocorreu um erro inesperado. Tente novamente em alguns segundos.',
      });
    }
  }
}
