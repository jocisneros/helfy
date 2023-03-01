// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPage } from './pages/start-page'
import { SchedulePage } from './pages/schedule-page'
import { HomePage } from './pages/home-page'
import { WorkoutSelectionPage } from './pages/workout-selection-page';
import { HelfyEntryStatus, RootStackParamList, UserSettings } from './types';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });
  const [status, setStatus] = useState(HelfyEntryStatus.Loading);
  const [userSettings, setUserSettings] = useState<UserSettings>();

  useEffect(() => {
    AsyncStorage.getItem('userSettings')
    .then(storedSettings => {
      if (storedSettings !== null) {
        setUserSettings(JSON.parse(storedSettings) as UserSettings)
      }
      setStatus(HelfyEntryStatus.Loaded);
    })
    .catch(error => setStatus(HelfyEntryStatus.Error))
  }, []);

  useEffect(() => {
    switch (status) {
      case HelfyEntryStatus.Loaded:
        if (userSettings !== undefined) {
          setStatus(HelfyEntryStatus.ReturningUser);
        } else {
          setStatus(HelfyEntryStatus.NewUser);
        }
      default:
        return;
    }
  }, [userSettings, status]);

  if (!fontsLoaded) {
    return null;
  }

  let initialPage: keyof RootStackParamList | undefined = undefined;

  switch (status) {
    case HelfyEntryStatus.Error:
    case HelfyEntryStatus.NewUser:
      initialPage = 'Start';
      break;
    case HelfyEntryStatus.ReturningUser:
      // Use 'Start' to Test, otherwise 'Home'
      initialPage = 'Home';
      break;
    case HelfyEntryStatus.Loading:
    case HelfyEntryStatus.Loaded:
    default:
      return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialPage} screenOptions={{
        // gestureEnabled: false,
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Schedule" component={SchedulePage} />
        <Stack.Screen name="Home" component={HomePage} initialParams={userSettings} />
        <Stack.Screen name="WorkoutSelection" component={WorkoutSelectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
