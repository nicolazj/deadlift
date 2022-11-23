import React, { FC } from 'react';
import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';

export interface onUpdateParams {
  value: number;
  isPressed: boolean;
}

interface SlideProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  factor?: number;
  onUpdate: (params: onUpdateParams) => void;
  children?: React.ReactNode;
}
export let Slider: FC<SlideProps> = ({
  onUpdate,
  children,
  value,
  min = -Infinity,
  max = Infinity,
  step = 1,
  factor = 0.1,
}) => {
  const start = useSharedValue(value);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue(value);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
      runOnJS(onUpdate)({ value: offset.value, isPressed: isPressed.value });
    })
    .onUpdate((e) => {
      offset.value =
        Math.round(
          Math.max(
            min,
            Math.min(max, Math.round(-e.translationY * factor) + start.value)
          ) / step
        ) * step;
      runOnJS(onUpdate)({
        value: offset.value,
        isPressed: isPressed.value,
      });
    })
    .onEnd(() => {
      start.value = offset.value;
    })
    .onFinalize(() => {
      isPressed.value = false;
      runOnJS(onUpdate)({ value: offset.value, isPressed: isPressed.value });
    });

  return (
    <GestureDetector gesture={gesture}>
      <View className=" flex-1  ">{children}</View>
    </GestureDetector>
  );
};
