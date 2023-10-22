import { DefaultTheme } from '@react-navigation/native';
import { MD3LightTheme } from 'react-native-paper';

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#27B2B3',
    text: '#034C81'
  },
};


export const MyTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme,
    backdrop: 'rgba(0, 0, 0, 0.7)',
    primary: '#27B2B3',
  },
};
