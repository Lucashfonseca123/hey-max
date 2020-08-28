import {useEffect, useState} from 'react';
import SoundRN from 'react-native-sound';
import {useSelector, useDispatch} from 'react-redux';
import {
  finishedAction,
  resetFinishedState,
} from 'features/settings/redux/reducer/settingsReducer';
import {AppState} from 'store/RootReducer';

interface ISound {
  song:
    | 'background_sound.mp3'
    | 'button.mp3'
    | 'next_level.mp3'
    | 'stage_finished.mp3';
  volume: number;
  play: boolean;
  infinite: boolean;
}

const Sound = ({song, volume, play, infinite}: ISound) => {
  const dispatch = useDispatch();

  const stateMusic = useSelector(
    (appState: AppState) => appState.SettingsReducer.state.finishedMusic,
  );

  useEffect(() => {
    dispatch(finishedAction());
  }, []);

  const music = useSelector(
    () =>
      new SoundRN(song, SoundRN.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }

        if (stateMusic) {
          dispatch(resetFinishedState());
          music.play((success) => {
            if (success) {
              dispatch(finishedAction());
              console.log('successfully finished playing ');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        }

        // music.setNumberOfLoops(1);

        music.setVolume(volume);
      }),
    [stateMusic],
  );

  return music;
};

export default Sound;
