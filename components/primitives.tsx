import { FC, useState } from 'react';
import { Text, TextProps, Pressable, PressableProps } from 'react-native';

let PText: FC<TextProps> = ({ className, ...rest }) => {
  return <Text className={`font-inter text-white ${className}`} {...rest} />;
};

let PButton: FC<PressableProps> = ({ children, ...rest }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      className={`w-auto items-center justify-center inline ${
        isPressed ? 'bg-slate-100' : 'bg-white'
      }`}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...rest}
    >
      {typeof children === 'string' ? (
        <P.Text className="text-[100px] text-violet-500 ">{children}</P.Text>
      ) : (
        children
      )}
    </Pressable>
  );
};

export let P = {
  Text: PText,
  Button: PButton,
};
