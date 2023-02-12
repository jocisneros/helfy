// App.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPage } from './pages/start-page'
import { HomePage } from './pages/home-page'
import { WorkoutSelectionPage } from './pages/workout-selection-page';
import { RootStackParamList } from './types';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="WorkoutSelection" component={WorkoutSelectionPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
