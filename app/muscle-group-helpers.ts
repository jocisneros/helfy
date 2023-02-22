// muscle-group-helpers.ts

import { MuscleGroup } from './types';

export function getMuscleGroupLabelColor(muscleGroup: MuscleGroup): string {
    switch (muscleGroup) {
        case MuscleGroup.Arms:
            return '#D763C4';
        case MuscleGroup.Legs:
            return '#7363D7';
        case MuscleGroup.Push:
            return '#63D77D';
        case MuscleGroup.Pull:
            return '#63C2D7';
        case MuscleGroup.UpperBody:
            return '#D76363';
        case MuscleGroup.None:
            return '#6398D7';
        case MuscleGroup.FullBody:
            return '#D7AF63';
        case MuscleGroup.ChestAndBack:
            return '#A82B67';
    }
    return '';
}

export function getMuscleGroupDescription(muscleGroup: MuscleGroup): string {
    switch (muscleGroup) {
        case MuscleGroup.Arms:
            return 'Arms Description';
        case MuscleGroup.Legs:
            return 'Legs Description';
        case MuscleGroup.Push:
            return 'Push Description';
        case MuscleGroup.Pull:
            return 'Pulls Description';
        case MuscleGroup.UpperBody:
            return 'Upper Body Description';
        case MuscleGroup.None:
            return 'Break Description';
        case MuscleGroup.FullBody:
            return 'Full Body Description';
        case MuscleGroup.ChestAndBack:
            return 'Chest and Back Description';
    }
    return '';
}
