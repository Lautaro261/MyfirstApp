/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
//import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import React from 'react';
//import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';

export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fernando herrera" /> */}
        {/* <CounterScreen /> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
