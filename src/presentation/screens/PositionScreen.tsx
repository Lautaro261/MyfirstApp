import React from 'react';
import {View, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBok}/>
      <View style={styles.orangeBox}/>
      <View style={styles.greenBox}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#28c4d9',
/*     justifyContent:'center',
    alignItems:'center', */
  },
  purpleBok:{
    width:100,
    height:100,
    backgroundColor:'#5856d6',
    borderWidth:10,
    borderColor:'white',
    position:'absolute', //por defecto siempre viene en posicion relativa
    bottom:0,
  },
  orangeBox:{
    width:100,
    height:100,
    backgroundColor:'#f0a23b',
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    top:0,
    right:0,
  },
  greenBox:{
    width:100,
    height:100,
    backgroundColor:'green',
    borderWidth:10,
    borderColor:'white',
   /*  position:'absolute',
    bottom:0,
    right:0,
    left:0,
    top:0, */
    ...StyleSheet.absoluteFillObject,
  },

});
