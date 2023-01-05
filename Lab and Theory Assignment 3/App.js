import React from 'react';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){
const Stack = createNativeStackNavigator();

return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}>
      </Stack.Screen>
      <Stack.Screen name='Signin' component={Signin}></Stack.Screen>
      <Stack.Screen name='Signup' component={Signup}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>

    </Stack.Navigator>
   
    </NavigationContainer>

)
}