// workout-type-helpers.ts

import { WorkoutType } from './types';

export function getWorkoutTypeColor(workoutType: WorkoutType): string {
    switch (workoutType) {
        case WorkoutType.Arms:
            return '#D763C4';
        case WorkoutType.Legs:
            return '#7363D7';
        case WorkoutType.Push:
            return '#63D77D';
        case WorkoutType.Pull:
            return '#63C2D7';
        case WorkoutType.UpperBody:
            return '#D76363';
        case WorkoutType.None:
            return '#808080';
        case WorkoutType.FullBody:
            return '#D7AF63';
        case WorkoutType.ChestAndBack:
            return '#A82B67';
    }
    return '';
}

export function getWorkoutTypeDescription(workoutType: WorkoutType): string {
    switch (workoutType) {
        case WorkoutType.Arms:
            return 'Arms Description';
        case WorkoutType.Legs:
            return 'Legs Description';
        case WorkoutType.Push:
            return 'Push Description';
        case WorkoutType.Pull:
            return 'Pulls Description';
        case WorkoutType.UpperBody:
            return 'Upper Body Description';
        case WorkoutType.None:
            return 'Break Description';
        case WorkoutType.FullBody:
            return 'Full Body Description';
        case WorkoutType.ChestAndBack:
            return 'Chest and Back Description';
    }
    return '';
}
