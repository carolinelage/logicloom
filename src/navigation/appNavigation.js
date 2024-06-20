import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatricOficinas from './../screens/Pedagogo/MatricOficinas/MatricOficinas';
import CadOficinas from './../screens/Pedagogo/CadOficinas/CadOficinas';
import MainScreen from '../screens/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/Profile/ProfileScreen';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Matricula" component={MatricOficinas} />
      <Drawer.Screen name="Oficinas" component={CadOficinas} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={MyDrawer} />
          <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    )
}