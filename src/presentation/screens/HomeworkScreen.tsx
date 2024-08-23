import React from 'react';
import {View, StyleSheet} from 'react-native';

export const HomeworkScreen = () => {

  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}/>
      <View style={[styles.box, styles.orangeBox]}/>
      <View style={[styles.box, styles.blueBox]}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#28425b',
    justifyContent:'center',
    alignItems:'center',
    //4) justifyContent:'space-between',
  },
  box:{
    width:100,
    height:100,
    borderWidth:10,
    borderColor:'white',
  },
  purpleBox:{
    backgroundColor:'#5856d6',
    //3) alignSelf:'flex-end',
    //4) alignSelf:'flex-end',
  },
  orangeBox:{
    backgroundColor:'#f0a23b',
    //1) flex:1,
  },
  blueBox:{
    backgroundColor:'#28c4d9',
    //2) width:'100%',
    //3) alignSelf:'center',
    //4) alignSelf:'flex-start',
  },
});
