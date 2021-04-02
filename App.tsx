/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Layout from 'src/layout/Layout';
import {Provider} from 'react-redux';
import configStore from 'src/provider/store';

const store = configStore();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Layout />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
