import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.reset({
      index: 0,
      routes: [{ name: 'AppNavigator' }],
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to MyChat!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
