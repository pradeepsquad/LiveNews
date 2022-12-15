import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screens/HomeScreen'
import NewsScreen from '../screens/NewsScreen';

import { colors } from 'components/colors';

export type RootStackParamList = {
  Home: undefined;
  News: { uri: string };
}

const DEFAULT_CONFIG = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleStyle: {
    color: colors.white
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={DEFAULT_CONFIG}
      >
        <Stack.Screen
          component={HomeScreen}
          name='Home'
          options={{
            title: 'Hacker News',
          }}
        />
        <Stack.Screen
          component={NewsScreen}
          name='News'
          options={{
            headerTintColor: colors.white
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;