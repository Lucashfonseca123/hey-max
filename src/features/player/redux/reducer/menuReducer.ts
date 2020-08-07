import {createSlice} from '@reduxjs/toolkit';
import {IMenuState} from '../types/PlayerStateTypes';
import ContentGame from 'rules/rules.json';

const initialState: IMenuState = {
  menus: [],
};

const menuReducerSlice = createSlice({
  name: '@menu',
  initialState: initialState,
  reducers: {
    getStages(state) {
      state.menus = ContentGame.menus;
    },
  },
});

export const {getStages} = menuReducerSlice.actions;
export default menuReducerSlice.reducer;
