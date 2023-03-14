// workout-list-item.tsx

import { StyleSheet, View, Text } from 'react-native';
import { HelfyColorPalette } from '../theme';
import { SelectedWorkout, Workout } from '../types';
import { IconButton } from '../components/icon-button';
import { PlusCircleIcon } from '../icons/plus-circle-icon';

type WorkoutDifficultyProps = {
    difficulty: number,
}

const WorkoutDifficulty = ({
    difficulty
}: WorkoutDifficultyProps) => {

    let difficultyText = 'I'
    switch (difficulty) {
        case 1:
            difficultyText = 'II'
        case 2:
            difficultyText = 'III'
    }

    return (
        <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyText}>{difficultyText}</Text>
        </View>
    )
}

type WorkoutListItemProps = {
    workout: Workout,
    addSelectedWorkout: (selectedWorkout: SelectedWorkout) => void,
}

export const WorkoutListItem = ({
    workout,
    addSelectedWorkout,
}: WorkoutListItemProps) => {
    return (
        <View style={styles.workoutContainer}>
            <IconButton
                onPress={
                    () => {}
                }
                icon={<PlusCircleIcon color={'white'} />}
                style={styles.iconButton}
                onPressColor={'#00000040'}
            />
            <Text style={styles.workoutText}>{workout.name}</Text>
            <WorkoutDifficulty
                difficulty={workout.difficulty}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    workoutText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
        width: '60%'
    },
	workoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: HelfyColorPalette.primary1,
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 45,
        width: '90%',
        left: 30,
    },
    difficultyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 25,
    },
    difficultyText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        width: 20
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
        position: 'absolute',
        left: -8,
    }
});
