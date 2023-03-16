// helpers.ts

import { WorkoutSchedule, WorkoutType } from './types';

export function getWorkoutTypeFromSchedule(date: Date, workoutSchedule: WorkoutSchedule): WorkoutType {
    switch (date.getDay()) {
        case 0:
            return workoutSchedule.sunday;
        case 1:
            return workoutSchedule.monday;
        case 2:
            return workoutSchedule.tuesday;
        case 3:
            return workoutSchedule.wednesday;
        case 4:
            return workoutSchedule.thursday;
        case 5:
            return workoutSchedule.friday;
        case 6:
            return workoutSchedule.saturday;
    }
    return WorkoutType.None;
}
