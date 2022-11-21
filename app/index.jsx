import {  Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg">Hello World</Text>
        <Text className="text-sm">This is the first page of your app.</Text>
        <Link href="/second">go to second</Link>
      </View>
  );
}

