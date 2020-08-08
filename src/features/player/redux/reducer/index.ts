import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import menuReducer from './menuReducer';
import playerReducer from './playerReducer';
import {IMenuState} from '../types/PlayerStateTypes';

const persistConfig = {
  key: 'player_feature',
  storage: AsyncStorage,
  whitelist: [],
  stateReconciler: autoMergeLevel2,
};

export default combineReducers({
  menu: persistReducer<IMenuState>(persistConfig, menuReducer),
  player: playerReducer,
});
