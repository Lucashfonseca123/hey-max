import React, {useState} from 'react';
import {Markdown, Image, Card, Modal, Button} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {headerComposer, Header} from 'navigation/NavigationMixins';
import {
  Container,
  DivCard,
  Padding,
  DivButtonModal,
  PaddingBar,
} from './styles';
import {TouchableOpacity, BackHandler} from 'react-native';
import {AppState} from 'store/RootReducer';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';

const ConfigurationScreen = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [sound, setSound] = useState(false);

  navigation.setOptions(
    headerComposer({
      leftComponent: Header.BackButton(() => navigation.goBack()),
      middleComponent: Header.Title('Configurações', 22),
      backgroundColor: '#FFEF60',
    }),
  );

  const showModal = () => {
    setVisibleModal(!visibleModal);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  const logout = () => {
    BackHandler.exitApp();
  };

  //   const getImage = () => {
  //     if (missingStage < 3) {
  //       return 'Bebe';
  //     }
  //     if (missingStage < 6) {
  //       return 'Criança';
  //     }
  //     if (missingStage < 9) {
  //       return 'Adolescente';
  //     }
  //     if (missingStage < 12) {
  //       return 'Adulto';
  //     }
  //     if (missingStage === 12) {
  //       return 'Velho';
  //     }
  //   };

  return (
    <Container>
      <Image type="Inteiro" width={110} height={480} />
      <DivCard>
        <Card
          width={100}
          backgroundColor="#E1CB00"
          borderWidth={5}
          borderColor="white">
          <Markdown title="Progresso" fontSize={18} />
          <PaddingBar />
          {/* <Markdown
            title={parseFloat((status * 100).toFixed(2)) + '%'}
            fontSize={18}
          /> */}
          <PaddingBar />
          {/* <Progress.Bar
            progress={status}
            width={100}
            height={20}
            color="#5ee045"
            borderColor="black"
            borderWidth={1}
          /> */}

          <Padding />
          <Markdown title="Status" fontSize={18} />
          {/* <Markdown
            title={getImage() === 'Velho' ? 'Idoso' : getImage()}
            fontSize={20}
            fontColor="#FFEF60"
          /> */}

          <Padding />
          {/* <Image type={getImage()} width={95} height={120} /> */}
          <Padding />

          <Markdown title="Som" fontSize={18} />
          <Padding />
          <TouchableOpacity onPress={() => setSound(!sound)}>
            {!sound ? (
              <Image type="Checkbox" width={40} height={40} />
            ) : (
              <Image type="CheckboxConfirmed" width={40} height={40} />
            )}
          </TouchableOpacity>
          <Padding />
          <Markdown title="Sair" fontSize={18} />
          <Padding />
          <TouchableOpacity onPress={() => showModal()}>
            <Image type="Exit" width={40} height={40} />
          </TouchableOpacity>
        </Card>
      </DivCard>
      <Modal
        isVisible={visibleModal}
        closeModal={closeModal}
        typeMax="TristeChoro">
        <Markdown title="Deseja sair?" fontColor="#FFEF60" />
        <DivButtonModal>
          <Button
            text="Não"
            onPress={() => closeModal()}
            widthSize={100}
            heightSize={10}
            fontSize={20}
          />
          <Button
            text="Sim"
            onPress={() => logout()}
            widthSize={100}
            heightSize={10}
            fontSize={20}
          />
        </DivButtonModal>
      </Modal>
    </Container>
  );
};

export default React.memo(ConfigurationScreen);
