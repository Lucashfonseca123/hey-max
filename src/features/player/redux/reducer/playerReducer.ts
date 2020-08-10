import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IGetStage,
  ISendAnswer,
  INextStage,
  IResetStage,
} from '../types/PlayerPayloadTypes';
import {IPlayerState} from '../types/PlayerStateTypes';
import ContentGame from 'rules/rules.json';

const initialState: IPlayerState = {
  idMenu: 0,
  idStage: 0,
  picture: '',
  alternative: [],
  answerCorrect: '',
  answered: undefined,
  finished: false,
};

const playerReduceSlice = createSlice({
  name: '@player',
  initialState: initialState,
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
        state.finished = stage.finished;
      } else {
        state.idMenu = idMenu;
        state.idStage = ContentGame.menus[idMenu].stage[0].id;
        state.picture = ContentGame.menus[idMenu].stage[0].picture;
        state.answerCorrect = ContentGame.menus[idMenu].stage[0].answerCorrect;
        state.alternative = ContentGame.menus[idMenu].stage[0].alternative;
        state.finished = false;
      }
    },
    nextStage(state, action: PayloadAction<INextStage>) {
      const {
        payload: {idMenu, idStage},
      } = action;

      if (ContentGame.menus[idMenu].stage[idStage]) {
        state.idMenu = idMenu;
        state.idStage = ContentGame.menus[idMenu].stage[idStage].id;
        state.picture = ContentGame.menus[idMenu].stage[idStage].picture;
        state.answerCorrect =
          ContentGame.menus[idMenu].stage[idStage].answerCorrect;
        state.alternative =
          ContentGame.menus[idMenu].stage[idStage].alternative;
      } else {
        state.finished = true;
      }
    },
    sendAnswer(state, action: PayloadAction<ISendAnswer>) {
      const {
        payload: {idMenu, stageId, response},
      } = action;

      //Se a resposta for igual a do gabarito
      if (response === ContentGame.menus[idMenu].stage[stageId].answerCorrect) {
        state.answered = true;
      } else {
        state.answered = false;
      }
    },

    resetResponse(state) {
      state.answered = undefined;
    },

    resetStage(state, action: PayloadAction<IResetStage>) {
      const {
        payload: {idMenu},
      } = action;
      state.idMenu = idMenu;
      state.idStage = ContentGame.menus[idMenu].stage[0].id;
      state.picture = ContentGame.menus[idMenu].stage[0].picture;
      state.answerCorrect = ContentGame.menus[idMenu].stage[0].answerCorrect;
      state.alternative = ContentGame.menus[idMenu].stage[0].alternative;
      state.finished = false;
    },
  },
});

export const {
  getStage,
  sendAnswer,
  resetResponse,
  nextStage,
  resetStage,
} = playerReduceSlice.actions;

export default playerReduceSlice.reducer;
