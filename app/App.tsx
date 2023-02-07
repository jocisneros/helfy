// App.tsx

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPage } from './pages/start-page'
import { HomePage } from './pages/home-page'
import { WorkoutSelectionPage } from './pages/workout-selection-page';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{
        headerShown: true
      }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="WorkoutSelection" component={WorkoutSelectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
