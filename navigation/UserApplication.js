import React, { useRef ,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import HomeStack from '../screens/HomeStack';

const UserApplication = () => {




  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused ? 'home' : 'home';
            }
            if (route.name === 'Browse') {
              iconName = focused ? 'search' : 'search';
            }
            if (route.name === 'Basket') {
              iconName = focused ? 'ios-cart' : 'ios-cart';
            }
            if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Browse" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Basket" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Account" component={HomeStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default UserApplication