import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screen/HomeScreens/HomePage/HomeScreen';

const Stack=createNativeStackNavigator();
const AppNavigation = () => {
  return (<Stack.Navigator options={{headerShown:false}}>
    <Stack.Screen name='HomeScreen' component={HomeScreen} />
  </Stack.Navigator>
    
  
  )
}

export default AppNavigation