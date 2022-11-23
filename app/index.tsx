import { Link, useLink } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import {
  useMaxTotalWeightOfTheWeekQuery,
  useMaxWeightQuery,
  useTotalWeightInPast7DaysQuery,
} from '../lib/query';

export default function Page() {
  const link = useLink();
  let { data: max_weight } = useMaxWeightQuery();
  let { data: max_total_weight_of_the_week } =
    useMaxTotalWeightOfTheWeekQuery();
  let { data: total_weight_in_past_7days } = useTotalWeightInPast7DaysQuery();

  return (
    <SafeAreaView className="flex-1 bg-violet-600 ">
      <View className="p-4">
        <Text className="text-[40px] text-white">Max</Text>
        <Text className="text-[100px] text-white">{max_weight ?? 0}kg</Text>
      </View>
      <View className="p-4">
        <Text className="text-[32px] text-white">Max weekly </Text>
        <Text className="text-[100px] text-white">
          {max_total_weight_of_the_week ?? 0}kg
        </Text>
      </View>

      <View className="p-4">
        <Text className="text-[32px] text-white">Past 7 days</Text>
        <Text className="text-[100px] text-white">
          {total_weight_in_past_7days ?? 0}kg
        </Text>
      </View>
      <View className="flex-1"></View>
      <View className="h-[200px]">
        <Pressable
          onPress={() => link.push('/add')}
          className="flex-1 items-center justify-center"
        >
          <Text className="text-[100px] text-white ">Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
