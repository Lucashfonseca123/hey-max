import React, { memo, useCallback, useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  setProgress,
  setCampaign,
  resetStatus,
  resetLoading,
  surveyAnswered,
} from 'features/accredit/redux/reducer/accreditReducer';
import {
  getStage,
  sendAnswer,
  resetResponse,
  nextStage,
} from 'features/player/redux/reducer/playerReducer';
import { useDispatch, useSelector } from 'react-redux';

import { headerComposer, Header } from 'navigation/NavigationMixins';
import {
  PictureContent,
  AlternativeContent,
  TitleContent,
  TitleView,
  PositionImage,
} from './styles';
import ResultAnswered from './resultAnswered';
import SatisfactionSurvey from './satisfactionSurvey';
import { Markdown, Image, Button } from 'components';
import { AppState } from 'store/RootReducer';
import { BackHandler } from 'react-native';

const PlayerScreen = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typeModal, setTypeModal] = useState(
    'success' || 'errored' || 'nextLevel' || 'finishLevel' || 'endGame',
  );
  const [typeModalProgress, setTypeModalProgress] = useState('');
  const [surveyModalVisible, setSurveyModalVisible] = useState(false);
  const {
    params: { id },
  } = useRoute();
  const { setOptions, navigate, goBack } = useNavigation();
  const dispatch = useDispatch();

  setOptions(
    headerComposer({
      leftComponent: Header.BackButton(() => navigate('MenuScreen')),
      backgroundColor: '#FFEF60',
      rightComponent: Header.ConfigButton(() =>
        navigate('ConfigurationScreen'),
      ),
    }),
  );

  useEffect(() => {
    const backAction = () => {
      goBack();
      return true;
    };

    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, [goBack]);

  const stageStorageProfile = useSelector((appState: AppState) =>
    appState.AccreditFeature.state.progress
      ? appState.AccreditFeature.state.progress[id]
      : null,
  );

  const stages = useSelector((appState: AppState) =>
    appState.PlayerFeature.menu.menus[id].stage[stageStorageProfile?.stageId]
      ? appState.PlayerFeature.menu.menus[id].stage[
      stageStorageProfile?.stageId
      ]
      : null,
  );

  const currentStage = useSelector(
    (appState: AppState) => appState.PlayerFeature.player,
  );

  const statusAnswered = useSelector(
    (appState: AppState) => appState.PlayerFeature.player.answered,
  );

  const stageFinished = useSelector(
    (appState: AppState) => appState.PlayerFeature.player.finished,
  );

  const statusAccredit = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.status,
  );

  const statusAccreditFinished = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.statusFinished,
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

  const fullGame = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.fullGame,
  );

  const surveyStatus = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.surveyAnswered,
  );

  const email = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.email,
  );

  const statusLoading = useSelector(
    (appState: AppState) => appState.AccreditFeature.state.loading,
  );

  useEffect(() => {
    if (statusLoading) {
      setLoading(false);
      setSurveyModalVisible(false);
      dispatch(resetLoading());
    }
  }, [statusLoading, dispatch]);

  useEffect(() => {
    if (fullGame && !surveyStatus && email) {
      setSurveyModalVisible(true);
    }
  }, [fullGame, surveyStatus, email]);

  useEffect(() => {
    dispatch(
      setCampaign({
        totalSizeStages: totalSizeStages,
        totalSizeStagesFinished: totalSizeStagesFinished,
      }),
    );
  }, [totalSizeStages, totalSizeStagesFinished]);

  useEffect(() => {
    dispatch(
      getStage({
        idMenu: id,
        stage: stages,
      }),
    );
  }, [id, stages, dispatch]);

  useEffect(() => {
    if (stageFinished) {
      setVisibleModal(true);
      setTypeModal('finishLevel');
      dispatch(
        setProgress({
          menuId: id,
          stageId: currentStage.idStage,
          finished: true,
        }),
      );
    }
  }, [stageFinished]);

  useEffect(() => {
    if (statusAnswered) {
      setVisibleModal(true);
      setTypeModal('success');
      dispatch(
        setProgress({
          menuId: id,
          stageId: currentStage.idStage + 1,
          finished: false,
        }),
      );
      dispatch(
        nextStage({
          idMenu: id,
          idStage: currentStage.idStage + 1,
        }),
      );
      dispatch(resetResponse());
    } else if (statusAnswered === false) {
      setVisibleModal(true);
      setTypeModal('errored');
      dispatch(resetResponse());
    }
  }, [statusAnswered, dispatch, currentStage.idStage, id]);

  useEffect(() => {
    switch (statusAccredit) {
      case 1:
        if (!statusAccreditFinished.status1) {
          setVisibleModal(true);
          setTypeModal('nextLevel');
          setTypeModalProgress('child');
          dispatch(resetStatus({ statusFinished: 'status1' }));
        }
        break;
      case 2:
        if (!statusAccreditFinished.status2) {
          setVisibleModal(true);
          setTypeModal('nextLevel');
          setTypeModalProgress('teenager');
          dispatch(resetStatus({ statusFinished: 'status2' }));
        }
        break;
      case 3:
        if (!statusAccreditFinished.status3) {
          setVisibleModal(true);
          setTypeModal('nextLevel');
          setTypeModalProgress('young');
          dispatch(resetStatus({ statusFinished: 'status3' }));
        }
        break;
      case 4:
        if (!statusAccreditFinished.status4) {
          setVisibleModal(true);
          setTypeModal('nextLevel');
          setTypeModalProgress('adult');
          dispatch(resetStatus({ statusFinished: 'status4' }));
        }
        break;
      case 5:
        if (!statusAccreditFinished.status5) {
          setVisibleModal(true);
          setTypeModal('nextLevel');
          setTypeModalProgress('old');
          dispatch(resetStatus({ statusFinished: 'status5' }));
        }
        break;
      default:
        return;
    }
  }, [statusAccredit, statusAccreditFinished]);

  const sendResponse = useCallback(
    (option: string) => {
      dispatch(
        sendAnswer({
          idMenu: id,
          stageId: currentStage.idStage,
          response: option,
        }),
      );
    },
    [currentStage.idStage, id, dispatch],
  );

  const closeModal = useCallback(() => {
    setVisibleModal(false);
  }, []);

  return (
    <>
      <TitleContent>
        <TitleView>
          <Markdown title="Qual figura é essa?" />
        </TitleView>
        <PositionImage>
          <Image type="Confuso" width={140} height={160} />
        </PositionImage>
      </TitleContent>
      <PictureContent>
        <Image type={currentStage.picture} height={200} width={200} />
      </PictureContent>
      <AlternativeContent>
        {currentStage.alternative.map((option) => (
          <Button
            text={option}
            onPress={() => sendResponse(option)}
            fontSize={14}
            heightSize={10}
            widthSize={95}
          />
        ))}
      </AlternativeContent>
      <ResultAnswered
        type={typeModal}
        isVisible={visibleModal}
        closeModal={closeModal}
        typeProgress={typeModalProgress}
      />
      <SatisfactionSurvey
        loading={loading}
        isVisible={surveyModalVisible}
        onPressed={(item: string) => {
          dispatch(surveyAnswered({ surverAnswered: item }));
          setLoading(true);
          // console.log(item);
        }}
      />
    </>
  );
};

export default memo(PlayerScreen);
