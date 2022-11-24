import { Link, useLink } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { P } from '../components/primitives';
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
    <SafeAreaView className="flex-1 bg-violet-600 flex">
      <View className="p-4">
        <P.Text className="text-5xl">Max</P.Text>
        <P.Text className="text-9xl">{max_weight ?? 0}kg</P.Text>
      </View>
      <View className="p-4">
        <P.Text className="text-5xl">Max weekly </P.Text>
        <P.Text className="text-9xl" adjustsFontSizeToFit numberOfLines={1}>
          {max_total_weight_of_the_week ?? 0}kg
        </P.Text>
      </View>

      <View className="p-4">
        <P.Text className="text-5xl">Past 7 days</P.Text>
        <P.Text className="text-9xl" adjustsFontSizeToFit numberOfLines={1}>
          {total_weight_in_past_7days ?? 0}kg
        </P.Text>
      </View>
      <View className="flex-1"></View>
      <View className="">
        <P.Button onPress={() => link.push('/add')}>Add</P.Button>
      </View>
    </SafeAreaView>
  );
}
