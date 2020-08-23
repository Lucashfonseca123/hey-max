import SoundRN from 'react-native-sound';
import {useSelector} from 'react-redux';

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
  const music = useSelector(
    () =>
      new SoundRN(song, SoundRN.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }

        music.setNumberOfLoops(-1);

        if (play) {
          music.play((success) => {
            if (success) {
              console.log('successfully finished playing');
            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });
        }

        music.setVolume(volume);
      }),
    [volume, song],
  );

  return music;
};

export default Sound;
