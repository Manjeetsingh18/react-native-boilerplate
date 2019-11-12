/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import createStore from './src/stores/create';
import { Colors } from './src/themes';
import Root from './src';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.fire }}>
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
