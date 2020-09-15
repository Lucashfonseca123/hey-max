import React, {useState, useCallback, useEffect} from 'react';
import {Markdown, Image, Card, Modal, Button} from '../../../../components';
import {useNavigation} from '@react-navigation/native';
import {headerComposer, Header} from 'navigation/NavigationMixins';
import {
  Container,
  DivCard,
  Padding,
  DivButtonModal,
  PaddingBar,
  DivVersion,
} from './styles';
import {TouchableOpacity, BackHandler} from 'react-native';
import {AppState} from 'store/RootReducer';
import {setCampaign} from 'features/accredit/redux/reducer/accreditReducer';
import * as Progress from 'react-native-progress';
import {useSelector, useDispatch} from 'react-redux';

const ConfigurationScreen = () => {
  const navigation = useNavigation();
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [sound, setSound] = useState(false);
  const dispatch = useDispatch();

  navigation.setOptions(
    headerComposer({
      leftComponent: Header.BackButton(() => navigation.goBack()),
      middleComponent: Header.Title('Configurações', 22),
      backgroundColor: '#FFEF60',
    }),
  );

  const totalSizeStagesFinished = useSelector((appState: AppState) =>
    appState.AccreditFeature.state.progress.reduce((total, stagesAccredit) => {
      if (!stagesAccredit.finished) {
        return (total += stagesAccredit.stageId);
      } else {
        return (total +=
          appState.PlayerFeature.menu.menus[stagesAccredit.menuId].stage
            .length);
      }
    }, 0),
  );

  const totalSizeStages = useSelector((appState: AppState) =>
    appState.PlayerFeature.menu.menus.reduce(
      (total, menu) => (total += menu.stage.length),
      0,
    ),
  );

  useEffect(() => {
    dispatch(
      setCampaign({
        totalSizeStages: totalSizeStages,
        totalSizeStagesFinished: totalSizeStagesFinished,
      }),
    );
  }, [totalSizeStages, totalSizeStagesFinished]);

  const campaign = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.campaign,
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

  const getImage = useCallback(() => {
    if (campaign < 0.2) {
      return 'Bebe';
    }
    if (campaign >= 0.2 && campaign < 0.4) {
      return 'Criança';
    }
    if (campaign >= 0.4 && campaign < 0.6) {
      return 'Adolescente';
    }
    if (campaign >= 0.6 && campaign < 0.8) {
      return 'Adulto';
    }
    if (campaign === 1) {
      return 'Velho';
    }
  }, [campaign]);

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
          <Markdown
            title={parseFloat((campaign * 100).toFixed(2)) + '%'}
            fontSize={18}
          />
          <PaddingBar />
          <Progress.Bar
            progress={campaign}
            width={100}
            height={20}
            color="#00F006"
            borderColor="black"
            borderWidth={1}
          />

          <Padding />
          <Markdown title="Status" fontSize={18} />
          <Markdown
            title={getImage() === 'Velho' ? 'Idoso' : getImage()}
            fontSize={20}
            fontColor="#FFEF60"
          />

          <Padding />
          <Image type={getImage()} width={95} height={120} />
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
          <DivVersion>
            <Markdown title="v 1.3" fontSize={10} />
          </DivVersion>
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
