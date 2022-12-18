import React from 'react';
import { StyleSheet,  Text, View ,Pressable} from 'react-native';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App(){
const Stack = createNativeStackNavigator();


return(
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Signup} />
        
      </Stack.Navigator>
    </NavigationContainer>

)
}



