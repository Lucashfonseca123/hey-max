import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';
import {Image, Button, PopUp} from '../../../../components';
import {
  Container,
  ContainerTop,
  ContainerMiddle,
  ContainerBottom,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const AvatarPresentationScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Container>
      <PopUp
        title="Esse é o Pedro!  Quanto mais perguntas acertar, mais rápido ele irá crescer!"
        posLeft={80}
        posTop={45}
        fontSize={18}
        width={81}
      />
      <ContainerTop>
        <Image type="FelizOrelhaBaixoDente" width={140} height={160} />
      </ContainerTop>
      <ContainerMiddle>
        <Animated.View
          style={[
            {
              opacity: fadeAnim,
            },
          ]}>
          <Image type="Bebe" width={140} height={160} />
        </Animated.View>
      </ContainerMiddle>
      <ContainerBottom>
        <Button
          text="Ok, vamos lá!"
          onPress={() => navigation.navigate('MenuScreen')}
          widthSize={200}
          heightSize={10}
          fontSize={20}
        />
      </ContainerBottom>
    </Container>
  );
};

export default React.memo(AvatarPresentationScreen);
