import {ISetUserState} from '../types/AccreditationStateTypes';
import {ISetUser} from '../types/AccreditationPayloadTypes';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: ISetUserState = {
  name: '',
  loading: false,
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
    resetLoading(state) {
      state.loading = false;
    },
  },
});

export const {setName, resetLoading} = accreditReducerSlice.actions;
export default accreditReducerSlice.reducer;
