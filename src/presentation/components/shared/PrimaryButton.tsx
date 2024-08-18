/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Pressable, Text, Platform} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={({pressed}) => [styles.button, pressed && styles.buttonPress]}>
      <Text
        style={{
          color: Platform.OS === 'android' ? 'white' : '#4746ab',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856d6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPress: {
    backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white',
  },
});
