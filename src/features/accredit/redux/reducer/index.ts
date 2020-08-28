import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import accreditReducer from './accreditReducer';
import {combineReducers} from '@reduxjs/toolkit';
import {ISetUserState} from '../types/AccreditationStateTypes';

const persistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  whitelist: ['name'],
};

export default combineReducers({
  state: persistReducer<ISetUserState>(persistConfig, accreditReducer),
});
