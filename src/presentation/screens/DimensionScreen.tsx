import React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {Text} from 'react-native-paper';
//import {Dimensions} from 'react-native';

//const dimensions = Dimensions.get('window');
//const {width, height} = Dimensions.get('window'); No se actualiza al rotar el dispositivo

export const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.6,
          }}
        />
      </View>

      <Text style={styles.title}>
        wedth: {width}, height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});
// el Porcentaje  hace referencia al padre, es decir, tomara un porcentaje de las medidas del padre. En este caso Container.
