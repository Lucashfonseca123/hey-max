import {ISetUserState} from '../types/AccreditationStateTypes';
import {ISetUser, ISetProgress} from '../types/AccreditationPayloadTypes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ISetUserState = {
  name: '',
  loading: false,
  progress: [],
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
        (item) => (item.menuId = payload.menuId),
      );

      if (index > -1) {
        state.progress[index] = payload;
      } else {
        state.progress?.push(payload);
      }
    },
    resetLoading(state) {
      state.loading = false;
    },
  },
});

export const {
  setName,
  resetLoading,
  setProgress,
} = accreditReducerSlice.actions;
export default accreditReducerSlice.reducer;
