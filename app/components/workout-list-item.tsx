// workout-list-item.tsx

import { StyleSheet, View, Text } from 'react-native';
import { HelfyColorPalette } from '../theme';
import { SelectedWorkout, Workout, WorkoutRating } from '../types';
import { IconButton } from '../components/icon-button';
import { PlusCircleIcon } from '../icons/plus-circle-icon';
import { useCallback, useState } from 'react';
import { CheckButton } from './check-button';

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
    recommended?: boolean,
}

export const WorkoutListItem = ({
    workout,
    addSelectedWorkout,
    recommended,
}: WorkoutListItemProps) => {
    const onPress = useCallback(() => {
        addSelectedWorkout({
            ...workout,
            weight: 0,
            setCount: 0,
            repititionCount: 0,
            rating: WorkoutRating.Unrated,
        });
    }, [workout]);

    const [isChecked, setChecked] = useState(false); 
    
    return (
        <View style={recommended ? styles.workoutContainerRecommended : styles.workoutContainer}>
            <CheckButton
                    isChecked={isChecked}
                    onPress={() => { setChecked(!isChecked); !isChecked && addSelectedWorkout({
                        ...workout,
                        weight: 0,
                        setCount: 0,
                        repititionCount: 0,
                        rating: WorkoutRating.Unrated,
                    }); }}
                    style={isChecked ? styles.checkedButton : styles.uncheckedButton}
                />
            <Text 
                style={styles.workoutText}
                numberOfLines={1}
            >
                {workout.name}
            </Text>
            <WorkoutDifficulty
                difficulty={workout.difficulty}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    workoutText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: 'white',
        width: '60%',
        marginLeft: 24,
    },
    workoutContainerRecommended: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#65b869',
        width: '80%',
        marginLeft: 20,
        paddingHorizontal: 10,
        height: 58,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 18
    },
	workoutContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3B463C',
        width: '80%',
        marginLeft: 20,
        paddingHorizontal: 10,
        height: 58,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 18
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
        left: -16,
    },
    checkedButton: {
        backgroundColor: '#78CF81',
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        position: 'absolute',
        left: -16,
    },
    uncheckedButton: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        position: 'absolute',
        left: -16,
    },
});
