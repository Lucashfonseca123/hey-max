import React, {useEffect, useCallback} from 'react';
import {TouchableOpacity, BackHandler} from 'react-native';
import {useNavigation, StackActions} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';
import {getStages} from 'features/player/redux/reducer/menuReducer';
import {setStateToInitial} from 'features/accredit/redux/reducer/accreditReducer';

import {Markdown, Button, Image} from '../../../../components';
import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  ContainerEmail,
} from './styles';
import {useDispatch, useSelector} from 'react-redux';
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

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isName = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.name,
  );

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '562929892594-0sl2apna4kk7joc8skrkn3cqksb2pk6b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //   });
  // });

  useEffect(() => {
    dispatch(getStages());
    // dispatch(setStateToInitial());
  }, [dispatch]);

  return (
    <Container>
      <ContainerTop>
        <Markdown title="hey max" fontSize={64} />
      </ContainerTop>
      <ContainerEmail>
        <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
        <TouchableOpacity style={{marginTop: 16}} onPress={() => {}}>
          <Image type="Gmail" height={40} width={60} />
        </TouchableOpacity>
      </ContainerEmail>
      <ContainerMiddle>
        <Button
          text="INICIAR"
          onPress={() => {
            if (isName) {
              navigation.navigate('MenuScreen');
            } else {
              navigation.navigate('RegisterScreen');
            }
          }}
          backgroundColor="white"
          fontSize={36}
          heightSize={16}
          widthSize={300}
        />
      </ContainerMiddle>
      <ContainerBottom>
        <Image type="Feliz" />
      </ContainerBottom>
    </Container>
  );
};

export default React.memo(WelcomeScreen);
