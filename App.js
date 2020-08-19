import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainNavigator from './navigation/BreedNavigator'
import { Constants } from 'expo'
import { enableScreens } from 'react-native-screens'

enableScreens();



export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false)

  // useEffect(() => {
  //   async function loadFont(){
  //     await Font.loadAsync({
  //       'boba-panda': require('./assets/fonts/Boba Panda Font by 7NTypes.otf'),
  //       'architectsDaughter': require('./assets/fonts/ArchitectsDaughter-Regular.ttf'),
  //     })
  //   }
  //   loadFont()
  // }, [])

  // if(!fontLoaded){
  //   return <AppLoading 
  //     startAsync={fetchFonts} 
  //     onFinish={()=> setFontLoaded(true)} />
  // }


  return (<MainNavigator />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 