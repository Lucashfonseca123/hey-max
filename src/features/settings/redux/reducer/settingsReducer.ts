import {createSlice, createAction} from '@reduxjs/toolkit';
import {ISettings} from '../types/settingsStateTypes';

const initialState: ISettings = {
  finishedMusic: false,
};

const settingsReducerSlice = createSlice({
  name: '@settings',
  initialState: initialState,
  reducers: {
    finishedStateSuccess(state) {
      state.finishedMusic = true;
    },
    resetFinishedState(state) {
      state.finishedMusic = false;
    },
  },
});

export const finishedAction = createAction('@settings/finishedState');

export const {
  finishedStateSuccess,
  resetFinishedState,
} = settingsReducerSlice.actions;
export default settingsReducerSlice.reducer;
