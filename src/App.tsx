if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React, {useEffect} from 'react';
import {StatusBar, SafeAreaView, Text} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from '@sentry/react-native';

import RootNavigator from './navigation/RootNavigator';

const App = () => {
  useEffect(() => {
    Sentry.init({
      dsn:
        'https://f6f0edf85a644c9faf1b1476a876b879@o437666.ingest.sentry.io/5400536',
    });
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <StatusBar hidden />
            <RootNavigator />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
