import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Register from '../screens/Register';
import UserApplication from './UserApplication';
import UserRegister from '../components/userReg';
import DocRegister from '../components/docReg';
import DocApplication from './DocApplication'
import AdminApplication from './AdminApplication'

// screen tracking is enabled using firebase Analytics
const Stack = createNativeStackNavigator();

function Auth() {

  return (
    <NavigationContainer independent={true}>  
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="UserApplication" component={UserApplication} options={{ headerShown: false }} />
        <Stack.Screen name="DocApplication" component={DocApplication} options={{ headerShown: false }} />
        <Stack.Screen name="userReg" component={UserRegister} options={{ headerShown: false }} />
        <Stack.Screen name="docReg" component={DocRegister} options={{ headerShown: false }} />
        <Stack.Screen name="AdminApplication" component={AdminApplication} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Auth;