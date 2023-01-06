
import Login from '../components/Login';
import Signup from '../components/Signup';
import Home from './Home';

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Register from './Register';

const stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator 
      initialRouteName='signup'>
        <stack.Screen name='home' component={Home}/>
        <stack.Screen name='register' component={Register} />
        <stack.Screen name='login' component={Login}/>
        <stack.Screen name='signup' component={Signup}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation