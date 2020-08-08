import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGetStage} from '../types/PlayerPayloadTypes';
import {IPlayerState} from '../types/PlayerStateTypes';
import ContentGame from 'rules/rules.json';

const initalState: IPlayerState = {
  idMenu: 0,
  idStage: 0,
  picture: '',
  alternative: [],
  answerCorrect: '',
};

const playerReduceSlice = createSlice({
  name: '@player',
  initialState: initalState,
  reducers: {
    getStage(state, action: PayloadAction<IGetStage>) {
      const {
        payload: {idMenu, stage},
      } = action;

      if (stage) {
        state.idMenu = idMenu;
        state.idStage = stage.id;
        state.picture = stage.picture;
        state.answerCorrect = stage.answerCorrect;
        state.alternative = stage.alternative;
      } else {
        state.idMenu = idMenu;
        state.idStage = ContentGame.menus[idMenu].stage[0].id;
        state.picture = ContentGame.menus[idMenu].stage[0].picture;
        state.answerCorrect = ContentGame.menus[idMenu].stage[0].answerCorrect;
        state.alternative = ContentGame.menus[idMenu].stage[0].alternative;
      }
    },
  },
});

export const {getStage} = playerReduceSlice.actions;

export default playerReduceSlice.reducer;
