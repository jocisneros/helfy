// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPage } from './pages/start-page'
import { SchedulePage } from './pages/schedule-page'
import { HomePage } from './pages/home-page'
import { WorkoutSelectionPage } from './pages/workout-selection-page';
import { Height, RootStackParamList, UserSettings } from './types';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { useState } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });
  const [userSettings, setUserSettings] = useState<UserSettings>();

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Schedule" component={SchedulePage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="WorkoutSelection" component={WorkoutSelectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
