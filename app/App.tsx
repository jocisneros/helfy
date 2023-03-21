// App.tsx

import 'react-native-get-random-values';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { HelfyProvider } from './helfy-context';
import { Helfy } from './Helfy';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    // if (__DEV__) {
    //     console.log('clearing')
    //     AsyncStorage.getAllKeys()
    //         .then(keys => {
    //             console.log(keys);
    //             AsyncStorage.multiRemove(keys).then(
    //                 () => console.log('cleared')
    //             );
    //         })
    // }

    return (
        <HelfyProvider>
            <Helfy />
        </HelfyProvider>
    );
}
