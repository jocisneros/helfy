// workout-selection-page.tsx

import { StyleSheet, Text, View, Button } from 'react-native';
import { WorkoutSelectionPageNavigationProp } from '../types';

export const WorkoutSelectionPage = ({ route, navigation }: WorkoutSelectionPageNavigationProp) => {
    return (
      <View style={styles.container}>
        <Text>Start page</Text>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
