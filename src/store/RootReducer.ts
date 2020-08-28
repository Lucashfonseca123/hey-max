import {combineReducers} from '@reduxjs/toolkit';
import accreditReducer from 'features/accredit/redux/reducer';
import menuReducer from 'features/player/redux/reducer';
import settingsReducer from 'features/settings/redux/reducer';

const rootReducer = combineReducers({
  AccreditFeature: accreditReducer,
  PlayerFeature: menuReducer,
  SettingsReducer: settingsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
