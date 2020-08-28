// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reactotron from '../ReactotronConfig';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootSaga from './RootSaga';
import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './RootReducer';

const sagaMonitor = reactotron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const persistConfig = {
  key: 'heyMax',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  enhancers: [reactotron.createEnhancer()],
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
