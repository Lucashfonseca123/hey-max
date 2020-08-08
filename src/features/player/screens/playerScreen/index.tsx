import React, {memo, useCallback, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {setProgress} from 'features/accredit/redux/reducer/accreditReducer';
import {getStage} from 'features/player/redux/reducer/playerReducer';
import {useDispatch, useSelector} from 'react-redux';

import {headerComposer, Header} from 'navigation/NavigationMixins';
import {
  PictureContent,
  AlternativeContent,
  TitleContent,
  TitleView,
  PositionImage,
} from './styles';
import {Markdown, Image, Button} from 'components';
import {AppState} from 'store/RootReducer';
import {View} from 'react-native';

const PlayerScreen = () => {
  const {
    params: {id},
  } = useRoute();
  const {setOptions, navigate} = useNavigation();
  const dispatch = useDispatch();

  setOptions(
    headerComposer({
      leftComponent: Header.BackButton(() => navigate('WelcomeScreen')),
      backgroundColor: '#FFEF60',
      rightComponent: Header.ConfigButton(() =>
        navigate('ConfigurationScreen'),
      ),
    }),
  );

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

  useEffect(() => {
    dispatch(
      getStage({
        idMenu: id,
        stage: stages,
      }),
    );
  }, [id, stages, dispatch]);

  const sendAnswer = useCallback(() => {
    //A desenvolver
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
            onPress={() => {}}
            fontSize={14}
            heightSize={10}
            widthSize={95}
          />
        ))}
      </AlternativeContent>
    </>
  );
};

export default memo(PlayerScreen);
