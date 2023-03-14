// workout-list-item.tsx

import { StyleSheet } from 'react-native';
import { SelectedWorkout, Workout } from '../types';

type WorkoutListItemProps = {
    workout: Workout,
    addSelectedWorkout: (selectedWorkout: SelectedWorkout) => void,
}

export const WorkoutListItem = ({
    workout,
    addSelectedWorkout,
}: WorkoutListItemProps) => {
    return null;
};

const styles = StyleSheet.create({

});
