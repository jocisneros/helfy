// types.tsx

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Start: undefined;
    Schedule: { 
        weight: number
        height: Height
        sex: string
        age: number
    };
    Home: undefined;
    WorkoutSelection: undefined;
};

export type StartPageNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'Start'
>;

export type SchedulePageNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'Schedule'
>;

export type HomePageNavigationProp = NativeStackScreenProps<
    RootStackParamList, 
    'Home'
>;

export type WorkoutSelectionPageNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'WorkoutSelection'
>;

export type Workout = {
    id?: number,
    name: string,
    difficulty?: number,
    demoUrl?: string,
    tips?: string[],
    muscleGroup?: string,
};

export enum MuscleGroup {
    Legs = 'Legs',
    Arms = 'Arms',
    ChestAndBack = 'Chest/Back',
    Push = 'Push',
    Pull = 'Pull',
    UpperBody = 'Upper Body',
    LowerBody = 'Lower Body',
    FullBody = 'Full Body',
};

export type Height = {
    feet: number,
    inches: number
};

export type UserSettings = {
    weight: number
    height: Height
    age: number
    sex: string
    workoutSchedule: string
}
