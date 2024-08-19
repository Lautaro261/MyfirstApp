/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Box Object Model Screen</Text> */}

      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hello</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbce40',
  },
  title: {
    fontSize: 25,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    padding: 5,
  },
});
