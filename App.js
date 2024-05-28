import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/home';
import Detalhes from './screens/details';

export default function App() {
  const stack = createStackNavigator();

  return (
  <NavigationContainer>

    <stack.Navigator>

      <stack.Screen name = 'home' component = {Home}/>
      <stack.Screen name = 'details' component = {Detalhes}/>

    </stack.Navigator>

  </NavigationContainer>  

  );
}
