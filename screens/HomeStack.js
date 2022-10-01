import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';


// screen tracking is enabled using firebase Analytics
const Stack = createNativeStackNavigator();

function HomeStack() {

  const routeNameRef = useRef();
  const navigationRef = useRef();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;