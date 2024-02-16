import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
// screens
import Login from './screens/login';
import Welcome from './screens/welcom';
import Register from './screens/register';
import Setting from './screens/usersetting';
import { InitialStack } from './navigation/stack';



export default function App() {
  return (
    <NavigationContainer>
      <InitialStack />
    </NavigationContainer>
  );
}

