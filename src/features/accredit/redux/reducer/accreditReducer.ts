import {ISetUserState} from '../types/AccreditationStateTypes';
import {
  ISetUser,
  ISetProgress,
  ISetCampaign,
} from '../types/AccreditationPayloadTypes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
  status: {
    status1: false,
    status2: false,
    status3: false,
    status4: false,
  },
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

      if (
        totalSizeStagesFinished >= totalSizeStages * 0.25 &&
        totalSizeStagesFinished < totalSizeStages * 0.5
      ) {
        state.status.status1 = true;
      } else if (
        totalSizeStagesFinished >= totalSizeStages * 0.5 &&
        totalSizeStagesFinished < totalSizeStages * 0.75
      ) {
        state.status.status2 = true;
      } else if (
        totalSizeStagesFinished >= totalSizeStages * 0.75 &&
        totalSizeStagesFinished < totalSizeStages * 1
      ) {
        state.status.status3 = true;
      } else if (totalSizeStagesFinished === totalSizeStages * 1) {
        state.status.status4 = true;
      }

      state.campaign = totalSizeStagesFinished / totalSizeStages;
    },
    resetLoading(state) {
      state.loading = false;
    },
    setStateToInitial: () => initialState,
  },
});

export const {
  setName,
  resetLoading,
  setProgress,
  setStateToInitial,
  setCampaign,
} = accreditReducerSlice.actions;
export default accreditReducerSlice.reducer;
