import { View, Text, SafeAreaView } from 'react-native';
import { Children } from 'expo-router';
import { SplashScreen } from 'expo-router';
import { useUser } from '../svc/useUser';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function Layout() {
  let user = useUser();

  if (!user) {
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
