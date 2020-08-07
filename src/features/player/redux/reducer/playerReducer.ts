import {createSlice} from '@reduxjs/toolkit';

const initalState = {};

const playerReduceSlice = createSlice({
  name: '@player',
  initialState: initalState,
  reducers: {
    getStage(state) {},
  },
});

export const {getStage} = playerReduceSlice.actions;

export default playerReduceSlice.reducer;
