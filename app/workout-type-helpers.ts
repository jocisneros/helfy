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
            return 'Exercises that work out the biceps, triceps, and forearms.';
        case WorkoutType.Legs:
            return 'Exercises that work out the glutes, quads, hamstrings, and calves.';
        case WorkoutType.Push:
            return 'Exercises that work out the chest, shoulders, and triceps.';
        case WorkoutType.Pull:
            return 'Exercises that work out the back and biceps.';
        case WorkoutType.UpperBody:
            return 'Exercises that work out the arms, back, chest, and shoulders.';
        case WorkoutType.None:
            return 'A break day king, enjoy! :)';
        case WorkoutType.FullBody:
            return 'Exercises that work out the glutes, quads, hamstrings, and calves.';
        case WorkoutType.ChestAndBack:
            return 'Exercises that work out the upper and lower body.';
    }
    return '';
}
