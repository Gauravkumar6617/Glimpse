import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/Authentication/Login/LoginScreen';

const Stack=createNativeStackNavigator();
const AuthNavigation = () => {
  return (<Stack.Navigator  options={{headerShown:false}}>
    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
  </Stack.Navigator>
    
  
  )
}

export default AuthNavigation