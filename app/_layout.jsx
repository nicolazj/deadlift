import { View, Text } from 'react-native';
import { Children } from 'expo-router';
import { SplashScreen } from "expo-router";
import * as React from 'react';
export default function Layout() {
  const [isReady, setReady] = React.useState(false);

  if(!isReady) {
    return <SplashScreen/>
  }


  return (
    <View style={{margin:32,flex:1}}>
      <Text>hello 123</Text>
      <View style={{ flex: 1 }}>
        <Children />
      </View>
    </View>
  );
}
