import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Children, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useUser } from '../svc/useUser';


const queryClient = new QueryClient();

export default function Layout() {
  let user = useUser();

  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!user || !fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View className="flex-1">
        <StatusBar style="dark" />
        <Children />
      </View>
    </QueryClientProvider>
  );
}
