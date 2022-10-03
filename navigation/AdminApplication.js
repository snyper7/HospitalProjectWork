import React, { useRef ,useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import HomeStack from '../screens/HomeStack';
import DocHome from '../screens/DocHome';
import AdminHome from '../screens/AdminHome';
import DocRegister from '../components/docReg';

const DocApplication = () => {




  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            }
            if (route.name === 'Doctors') {
              iconName = focused ? 'man' : 'man';
            }
            if (route.name === 'User') {
              iconName = focused ? 'user' : 'io';
            }
            if (route.name === 'Add Doctor') {
              iconName = focused ? 'person' : 'person';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={AdminHome} options={{ headerShown: false }} />
        <Tab.Screen name="Doctors" component={AdminHome} options={{ headerShown: false }} />
        <Tab.Screen name="User" component={AdminHome} options={{ headerShown: false }} />
        <Tab.Screen name="Add Doctor" component={DocRegister} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default DocApplication