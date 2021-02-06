import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import { useFonts } from 'expo-font'
import { AppLoading  } from 'expo'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Places, user } from './src/JSON/Places'


import Main from './src/screens/Main'
import Place from './src/screens/Place'
import MapPlaces from './src/screens/MapPlaces'
import MenuScreen from './src/screens/MenuScreen'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    'Gilroy-BlackItalic': require('./src/fonts/Gilroy-BlackItalic.ttf'),
    'Gilroy-Black': require('./src/fonts/Gilroy-Black.ttf'),
    'Gilroy-BoldItalic': require('./src/fonts/Gilroy-BoldItalic.ttf'),
    'Gilroy-Bold': require('./src/fonts/Gilroy-Bold.ttf'),
    'Gilroy-ExtraboldItalic': require('./src/fonts/Gilroy-ExtraboldItalic.ttf'),
    'Gilroy-Extrabold': require('./src/fonts/Gilroy-Extrabold.ttf'),
    'Gilroy-HeavyItalic': require('./src/fonts/Gilroy-HeavyItalic.ttf'),
    'Gilroy-Heavy': require('./src/fonts/Gilroy-Heavy.ttf'),
    'Gilroy-LightItalic': require('./src/fonts/Gilroy-LightItalic.ttf'),
    'Gilroy-Light': require('./src/fonts/Gilroy-Light.ttf'),
    'Gilroy-MediumItalic': require('./src/fonts/Gilroy-MediumItalic.ttf'),
    'Gilroy-Medium': require('./src/fonts/Gilroy-Medium.ttf'),
    'Gilroy-RegularItalic': require('./src/fonts/Gilroy-RegularItalic.ttf'),
    'Gilroy-Regular': require('./src/fonts/Gilroy-Regular.ttf'),
    'Gilroy-SemiboldItalic': require('./src/fonts/Gilroy-SemiboldItalic.ttf'),
    'Gilroy-Semibold': require('./src/fonts/Gilroy-Semibold.ttf'),
    'Gilroy-ThinItalic': require('./src/fonts/Gilroy-ThinItalic.ttf'),
    'Gilroy-Thin': require('./src/fonts/Gilroy-Thin.ttf'),
    'Gilroy-UltraLightItalic': require('./src/fonts/Gilroy-UltraLightItalic.ttf'),
    'Gilroy-UltraLight': require('./src/fonts/Gilroy-UltraLight.ttf')
  })

  if (!fontsLoaded) {

    console.log('Font not')
    return <AppLoading/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} initialParams={{places: Places, user: user}} options={{headerShown: false}} />
        <Stack.Screen name='Main' component={Main} options={{headerShown: false}} />
        <Stack.Screen name='Place' component={Place} options={{headerShown: false}} /> 
        <Stack.Screen name='MapPlaces' component={MapPlaces} options={{headerShown: false}} />
        <Stack.Screen name='MenuScreen' component={MenuScreen} options={{headerShown: false}} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
