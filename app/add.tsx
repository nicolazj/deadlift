import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { onUpdateParams, Slider } from '../components/slider';
import { supabase } from '../lib/supabase';
import { useQueryClient } from '@tanstack/react-query';
import { useLink } from 'expo-router';
import { P } from '../components/primitives';

export default function Page() {
  let [weight, setWeight] = useState(100);
  let [reps, setReps] = useState(8);
  let link = useLink();
  let queryClient = useQueryClient();

  let onWeightUpdate = (e: onUpdateParams) => {
    setWeight(e.value);
  };
  let onRepsUpdate = (e: onUpdateParams) => {
    setReps(e.value);
  };

  let onAddLog = async () => {
    const { data, error } = await supabase
      .from('log')
      .insert([{ weight, reps }]);

    queryClient.invalidateQueries();
    link.replace('/');
  };

  return (
    <View className="flex  flex-1 flex-col">
      <View className="flex-[2] bg-violet-500">
        <Slider
          onUpdate={onWeightUpdate}
          value={weight}
          min={5}
          step={5}
          factor={0.3}
        >
          <View className="flex-1 items-center justify-center">
            <P.Text className="text-5xl ">Weight</P.Text>
            <P.Text
              className="text-9xl p-4"
              style={{ fontVariant: ['tabular-nums'] }}
            >
              {weight}
            </P.Text>
          </View>
        </Slider>
      </View>
      <View className="flex-[2] bg-violet-600">
        <Slider
          onUpdate={onRepsUpdate}
          value={reps}
          min={1}
          step={1}
          factor={0.05}
        >
          <View className="flex-1 items-center justify-center">
            <P.Text className="text-5xl">Reps</P.Text>
            <P.Text
              className="text-9xl p-4"
              style={{ fontVariant: ['tabular-nums'] }}
            >
              {reps}
            </P.Text>
          </View>
        </Slider>
      </View>
      <View className="flex-1 bg-violet-700">
        <P.Button onPress={onAddLog}>Add</P.Button>
      </View>
    </View>
  );
}
