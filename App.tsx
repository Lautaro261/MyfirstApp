/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView} from 'react-native';
//import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import React from 'react';
//import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
//import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { HomeworkScreen } from './src/presentation/screens/HomeworkScreen';
//import { ObjectModelScreen } from './src/presentation/screens/ObjectModelScreen';
//import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
//import { PositionScreen } from './src/presentation/screens/PositionScreen';
//import { FlexScreen } from './src/presentation/screens/FlexScreen';
//import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Fernando herrera" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <ObjectModelScreen/> */}
        {/* <DimensionScreen/> */}
        {/* <PositionScreen/> */}
        {/* <FlexScreen/> */}
        {/* <FlexDirectionScreen/> */}
        <HomeworkScreen/>
      </SafeAreaView>
    </PaperProvider>
  );
};
