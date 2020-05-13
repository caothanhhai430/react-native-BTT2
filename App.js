import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MyButton text="Red" color="#b81402"/>
      <MyButton text="Green" color="#014212"/>
      <MyButton text="Blue" color="#0a6cc2"/>
      <MyButton text="Undo" color=""/>
      <MyButton text="Redo" color=""/>
    </View>
  );
}

const MyButton = (props) => (
  <TouchableOpacity
    style={{...styles.button,backgroundColor: props.color}}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    marginStart: 20,
    marginTop: 40,
  },
  button: {
    width: 40,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    color:'#ffffff'

  },
  text:{
    color: '#ffffff'
  }
});
