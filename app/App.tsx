// App.tsx

import 'react-native-get-random-values';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { HelfyProvider } from './helfy-context';
import { Helfy } from './Helfy';

export default function App() {
    const [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <HelfyProvider>
            <Helfy />
        </HelfyProvider>
    );
}
