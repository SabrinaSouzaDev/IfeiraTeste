import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Routes from './src/Routes';
import { TextStyle } from "./components/TextStyles";

import Header from "./components/Heder";



export default function App(){
  return  (
  <View style={style.container}>
  <StatusBar barStyle='light-content' backgroundColor='#000' />

 
  <Header />
  </View>
  
    )

}

const style = StyleSheet.create ({
  container: {
    flex: 1,
    //  alignItems: 'center',
    //   justifyContent: 'center'
    },
    // box: {
    //   backgroundColor: '#0000',
    //   width: width - 90, height: height -350,
    //   borderRadius: 20
    // }
  } 

)