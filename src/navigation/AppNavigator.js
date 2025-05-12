import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login.js';
import RegisterScreen from '../screens/Cadastro.js';
import BatDataBase from '../screens/BatDataBase.js';
import Perfil from '../screens/Perfil.js';
import Config from '../screens/Config.js';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={RegisterScreen} options={{ headerShown: true}} />
        <Stack.Screen name="BatDataBase" component={BatDataBase} options={{ headerShown: true }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: true }} />
        <Stack.Screen name="Config" component={Config} options={{ headerShown: true }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
