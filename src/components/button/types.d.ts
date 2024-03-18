import {GestureResponderEvent, ViewStyle} from 'react-native';

export interface ButtonProps {
  title?: string;
  style?: ViewStyle;
  onClick?: ((event: GestureResponderEvent) => void) | undefined;
}
