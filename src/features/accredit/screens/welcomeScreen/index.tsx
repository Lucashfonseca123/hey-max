import React, { useEffect, useCallback, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-community/google-signin';
import { getStages } from 'features/player/redux/reducer/menuReducer';
import {
  login as loginReducer,
  resetLoading,
} from 'features/accredit/redux/reducer/accreditReducer';

import { Markdown, Button, Image } from 'components';
import ResultAnswered from 'features/player/screens/playerScreen/resultAnswered';
import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
  ContainerEmail,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/RootReducer';
import reactotron from 'reactotron-react-native';

const WelcomeScreen = () => {
  const [isVisible, setVisible] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isName = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.name,
  );

  const loginStatus = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.loginSuccess,
  );

  const userLogInitial = useSelector((appState: AppState) =>
    appState.AccreditFeature.state.progress.map((progress) =>
      progress.finished === false && progress.stageId === 0 ? true : false,
    ),
  );

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '562929892594-0sl2apna4kk7joc8skrkn3cqksb2pk6b.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });
  });

  useEffect(() => {
    dispatch(getStages());
    // dispatch(setStateToInitial());
  }, [dispatch]);

  useEffect(() => {
    if (loginStatus) {
      setVisible(true);
    }
    return () => dispatch(resetLoading());
  }, [loginStatus]);

  const login = useCallback(() => {
    dispatch(loginReducer());
  }, [dispatch]);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <>
      <Container>
        <ContainerTop>
          <Markdown title="hey max" fontSize={64} />
        </ContainerTop>

        <ContainerEmail>
          <Markdown title="Faça seu login pelo e-mail" fontSize={16} />
          <TouchableOpacity style={{ marginTop: 16 }} onPress={login}>
            <Image type="Gmail" height={40} width={60} />
          </TouchableOpacity>
        </ContainerEmail>
        <ContainerMiddle>
          <Button
            text="INICIAR"
            onPress={() => {
              if (isName) {
                if (
                  userLogInitial[0] === false ||
                  userLogInitial[1] === false ||
                  userLogInitial[2] === false ||
                  userLogInitial[3] === false
                ) {
                  navigation.navigate('MenuScreen');
                } else {
                  navigation.navigate('AvatarPresentationScreen');
                }
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
        <ResultAnswered
          type="loginSuccess"
          isVisible={isVisible}
          closeModal={closeModal}
        />
      </Container>
    </>
  );
};

export default React.memo(WelcomeScreen);
