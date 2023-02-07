// home-page.tsx

import { StyleSheet, Text, View, Button } from 'react-native';
import { HomePageNavigationProp } from '../types';

type Workout = {
    title: string
}

export const HomePage = ({ route, navigation }: HomePageNavigationProp) => {
    const workouts = [
        {title: 'Leg Press'} as Workout,
        {title: 'Squats'} as Workout,
    ]
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text>Fri, Feb 10</Text>
        </View>
        <View style={styles.label}>
            <Text>Legs</Text>
        </View>
        <View style={styles.body}>
            <Text>Workouts</Text>
            <View style={styles.workoutList}>
                {workouts.map(workout => (
                    <View style={styles.workoutListitem}>
                        <Text>{workout.title}</Text>
                    </View>
                ))}
            </View>
            <View>
                <Text>X Steps</Text>
            </View>
        </View>
        <Button
          title='Go to Workout Selection Screen'
          onPress={() =>
            navigation.navigate('WorkoutSelection')
          }
        />
      </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#A9D4AD',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        backgroundColor: '#A9D4AD',
        width: '50%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    body: {
        backgroundColor: '#A9D4AD',
        width: '95%',
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    workoutList: {
        backgroundColor: '#C8EDCC',
        width: '90%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    workoutListitem: {
        backgroundColor: '#8F9B90',
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
