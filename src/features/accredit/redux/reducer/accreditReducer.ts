import {ISetUserState} from '../types/AccreditationStateTypes';
import {
  ISetUser,
  ISetProgress,
  ISetCampaign,
  IResetStatus,
  ILoginSuccess,
  ILoginErrored,
} from '../types/AccreditationPayloadTypes';
import {createSlice, PayloadAction, createAction} from '@reduxjs/toolkit';

const initialState: ISetUserState = {
  name: '',
  loading: false,
  progress: [
    {
      menuId: 0,
      stageId: 0,
      finished: false,
    },
  ],
  campaign: 0,
  status: 1,
  fullGame: false,
  statusFinished: {
    status1: false,
    status2: false,
    status3: false,
    status4: false,
    status5: false,
  },
  messageError: '',
};

const accreditReducerSlice = createSlice({
  name: '@accredit',
  initialState: initialState,
  reducers: {
    setName(state, action: PayloadAction<ISetUser>) {
      const {payload} = action;
      state.name = payload.name;
      state.loading = true;
    },
    setProgress(state, action: PayloadAction<ISetProgress>) {
      const {payload} = action;
      let index = state.progress.findIndex(
        (item) => item.menuId === payload.menuId,
      );

      if (index > -1) {
        if (state.progress[index].finished) {
          state.progress[index].menuId = payload.menuId;
          state.progress[index].stageId = payload.stageId;
        } else {
          state.progress[index] = payload;
        }
      } else {
        state.progress?.push(payload);
      }
    },
    setCampaign(state, action: PayloadAction<ISetCampaign>) {
      const {
        payload: {totalSizeStages, totalSizeStagesFinished},
      } = action;

      if (!state.fullGame) {
        if (
          totalSizeStagesFinished >= totalSizeStages * 0.25 &&
          totalSizeStagesFinished < totalSizeStages * 0.5
        ) {
          state.status = 2;
        } else if (
          totalSizeStagesFinished >= totalSizeStages * 0.5 &&
          totalSizeStagesFinished < totalSizeStages * 0.75
        ) {
          state.status = 3;
        } else if (
          totalSizeStagesFinished >= totalSizeStages * 0.75 &&
          totalSizeStagesFinished < totalSizeStages * 1
        ) {
          state.status = 4;
        } else if (totalSizeStagesFinished === totalSizeStages * 1) {
          state.status = 5;
          state.fullGame = true;
        }
      }

      state.campaign = totalSizeStagesFinished / totalSizeStages;
    },
    resetLoading(state) {
      state.loading = false;
    },
    resetStatus(state, action: PayloadAction<IResetStatus>) {
      const {
        payload: {statusFinished},
      } = action;
      switch (statusFinished) {
        case 'status1':
          state.statusFinished.status1 = true;
          break;
        case 'status2':
          state.statusFinished.status2 = true;
          break;
        case 'status3':
          state.statusFinished.status3 = true;
          break;
        case 'status4':
          state.statusFinished.status4 = true;
          break;
        case 'status5':
          state.statusFinished.status5 = true;
          break;
      }
      state.status = 0;
    },
    loginSuccess(state, action: PayloadAction<ILoginSuccess>) {
      const {payload} = action;
      state.name = payload.name;
      state.fullGame = payload.fullGame;
      state.progress = payload.progress;
      state.statusFinished = payload.statusFinished;
    },
    loginErrored(state, action: PayloadAction<ILoginErrored>) {
      const {payload} = action;
      state.messageError = payload.message;
    },
    setStateToInitial: () => initialState,
  },
});

export const login = createAction('@accredit/login');

export const {
  setName,
  resetLoading,
  setProgress,
  setStateToInitial,
  setCampaign,
  resetStatus,
  loginSuccess,
  loginErrored,
} = accreditReducerSlice.actions;
export default accreditReducerSlice.reducer;
