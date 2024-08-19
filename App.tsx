/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
//import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import React from 'react';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fernando herrera" /> */}
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
