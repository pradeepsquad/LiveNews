import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Author } from '../types';
export interface ContainerProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface WidgetProps {
  color: string;
  icon: keyof typeof Ionicons.glyphMap
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface BottomWidgetsProps {
  author: Author;
  score: number;
  time: number;
}