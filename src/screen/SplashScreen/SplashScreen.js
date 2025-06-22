import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';


export default  SplashScreen=()=> {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyChat</Text>
      <ActivityIndicator size="large" color="#00f" />
    </View>
  );
}
