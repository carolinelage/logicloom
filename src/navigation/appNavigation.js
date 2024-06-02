import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatricOficinas from './../screens/Pedagogo/MatricOficinas/MatricOficinas';
import CadOficinas from './../screens/Pedagogo/CadOficinas/CadOficinas';
import MainScreen from '../screens/MainScreen';


const Drawer = createDrawerNavigator();

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
      <MyDrawer />
    </NavigationContainer>
    )
}