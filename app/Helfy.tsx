// Helfy.tsx

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StartPage } from './pages/start-page'
import { SchedulePage } from './pages/schedule-page'
import { HomePage } from './pages/home-page'
import { WorkoutSelectionPage } from './pages/workout-selection-page';
import { HelfyEntryStatus, RootStackParamList } from './types';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import 'react-native-get-random-values';
import { useEntryStatus, useUserSettings } from './helfy-context';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Helfy = () => {
    const userSettings = useUserSettings();
    const entryStatus = useEntryStatus();

    let initialPage: keyof RootStackParamList | undefined = undefined;

    switch (entryStatus) {
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
                gestureEnabled: false,
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
