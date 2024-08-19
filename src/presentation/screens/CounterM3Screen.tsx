import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles} from '../themes/globalStyles';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Icon name="accessibility-outline" size={25} />
      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        label="+1"
        style={globalStyles.fab}
        icon="add"
      />
    </View>
  );
};
