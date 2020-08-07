import React, {useState, useCallback, useEffect} from 'react';
import {KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  setName,
  resetLoading,
} from 'features/accredit/redux/reducer/accreditReducer';
import {AppState} from 'store/RootReducer';

import {Button, Markdown, Card, TextField, Image, PopUp} from 'components';
import {
  Container,
  ContainerBottom,
  ContainerImage,
  ContainerPopUp,
} from './styles';

const RegisterScreen = () => {
  const [name, setNameTextField] = useState('');
  const [isFocused, setIsFocused] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const statusLoading = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.loading,
  );

  useEffect(() => {
    if (statusLoading) {
      setLoading(false);
      navigate('AvatarPresentationScreen');
    }
    return () => dispatch(resetLoading());
  }, [statusLoading, dispatch, navigate]);

  const notifyMessage = useCallback(() => {
    ToastAndroid.show(
      'Ops, acho que você esqueceu de digitar seu nome.',
      ToastAndroid.CENTER,
    );
  }, []);

  const setFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const setBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleRegisterName = useCallback(() => {
    if (!name) {
      notifyMessage();
    } else {
      setLoading(true);
      dispatch(setName({name: name}));
    }
  }, [name, dispatch, notifyMessage]);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={'padding'} enabled>
      <Container>
        <ContainerPopUp>
          <PopUp
            title="Olá, eu sou o max, serei seu amigo!  Qual é o seu nome?"
            width={79}
            posLeft={85}
            posTop={40}
            fontSize={18}
          />
        </ContainerPopUp>
        <ContainerImage>
          <Image type="FelizOrelhaDente" width={140} height={140} />
        </ContainerImage>
        <Card paddingTop={!name ? 1 : undefined}>
          <Markdown title={name} fontColor="#FFEC3F" />
          <TextField
            placeholder="Digite seu nome aqui..."
            textAlign="center"
            onBlur={setBlur}
            onFocus={setFocus}
            placeholderTextColor={isFocused ? '#E8C82E' : '#d2d2d2'}
            onChangeText={(text: string) => setNameTextField(text)}
            marginBottom={5}
            borderFocus={isFocused}
            onSubmitEditing={() => handleRegisterName()}
            keyboardType="default"
          />
        </Card>
        <ContainerBottom>
          <Button
            text="enviar"
            widthSize={120}
            loading={loading}
            heightSize={10}
            color={!name ? 'disabled' : 'enable'}
            onPress={() => handleRegisterName()}
            fontSize={20}
          />
        </ContainerBottom>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default React.memo(RegisterScreen);
