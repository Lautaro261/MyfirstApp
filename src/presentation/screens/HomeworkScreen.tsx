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
    //alignItems:'center',
    //4) justifyContent:'space-between',
    //5) flexDirection:'row',
    //5) justifyContent:'space-between',
    //6) justifyContent:'space-between',
    //7) justifyContent:'center',
    //7) alignItems:'center',
    //8) justifyContent:'center',
    //8) alignItems:'center',
    //9) justifyContent:'center',
    //9) alignItems:'center',
    //10) flexDirection: 'row',
    //10) justifyContent:'center',
    //10) alignItems:'center',
  },
  box:{
    //6) quitarwidth:100,
    //5) quitar height:100,
    //6) quitar height:100,
    width:100,
    height:100,
    borderWidth:10,
    borderColor:'white',
  },
  purpleBox:{
    backgroundColor:'#5856d6',
    //3) alignSelf:'flex-end',
    //4) alignSelf:'flex-end',
    //6) flex: 2,
    //9) top:100,
  },
  orangeBox:{
    backgroundColor:'#f0a23b',
    //1) flex:1,
    //6) flex:2,
    //8) left:100,
    //9) left:100,
    //10) top:50,
  },
  blueBox:{
    backgroundColor:'#28c4d9',
    //2) width:'100%',
    //3) alignSelf:'center',
    //4) alignSelf:'flex-start',
    //6) flex:4,
  },
});
