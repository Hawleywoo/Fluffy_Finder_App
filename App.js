import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import BreedNavigator from './navigation/BreedNavigator'
import { Constants } from 'expo'
import { enableScreens } from 'react-native-screens'

enableScreens();

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('.assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('.assets/fonts/OpenSans-Bold .ttf'),
//   })
// }

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false)

  // if(!fontLoaded){
  //   return <AppLoading startAsync={fetchFonts} onFinish={()=> setFontLoaded(true)} />
  // }
 
  
  return (<BreedNavigator /> );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
