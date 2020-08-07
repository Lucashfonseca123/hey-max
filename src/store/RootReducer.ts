import {combineReducers} from '@reduxjs/toolkit';
import accreditReducer from 'features/accredit/redux/reducer';
import menuReducer from 'features/player/redux/reducer';

const rootReducer = combineReducers({
  AccreditFeature: accreditReducer,
  MenuFeature: menuReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
