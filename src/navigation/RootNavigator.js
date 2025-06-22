import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screen/SplashScreen/SplashScreen';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };
    checkToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoading ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : isLoggedIn ? (
        <Stack.Screen name="AppNavigator" component={AppNavigation} />
      ) : (
        <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
}
