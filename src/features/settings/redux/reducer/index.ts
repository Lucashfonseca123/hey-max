import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const persistConfig = {
    key: 'auth_feature',
    storage: AsyncStorage,
    whitelist: ['counter'],
    stateReconciler: autoMergeLevel2,
};

export default combineReducers({
    countReducer: persistReducer(persistConfig, counterReducer),
    authReducerState: authReducer,
});