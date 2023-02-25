// types.tsx

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// App Types

export type Workout = {
    id: number,
    name: string,
    difficulty: number,
    demoUrl: string,
    tips: string[],
    muscleGroup?: string,
};

export enum WorkoutType {
    Legs = 'Legs',
    Arms = 'Arms',
    ChestAndBack = 'Chest/Back',
    Push = 'Push',
    Pull = 'Pull',
    UpperBody = 'Upper Body',
    FullBody = 'Full Body',
    None = 'None',
};

export enum WorkoutRating {
    ThumbsDown = -1,
    Unrated = 0,
    ThumbsUp = 1,
    DoubleThumbsUp = 3,
};

export type SelectedWorkout = Workout & {
    weight: number,
    setCount: number,
    repititionCount: number,
    rating: WorkoutRating,
};

export type Height = {
    feet: number,
    inches: number,
};

export type WorkoutSchedule = {
    sunday: WorkoutType,
    monday: WorkoutType,
    tuesday: WorkoutType,
    wednesday: WorkoutType,
    thursday: WorkoutType,
    friday: WorkoutType,
    saturday: WorkoutType,
};

export type UserSettings = {
    id: string,
    weight: number,
    height: Height,
    age: number,
    sex: string,
    workoutSchedule: WorkoutSchedule,
};

export enum HelfyEntryStatus {
    Loading,
    Loaded,
    NewUser,
    ReturningUser,
    Error,
};

// Page Types

export type RootStackParamList = {
    Start: undefined;
    Schedule: Omit<Omit<UserSettings, 'id'>, 'workoutSchedule'>;
    Home: UserSettings;
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

// HTTP Client Types

export type WorkoutData = {
    id: number,
    date: string,
    type: WorkoutType,
    workouts: Workout[],
};

export type CompletedWorkout = {
    id: number,
    weight: number,
    setCount: number,
    repititionCount: number,
    rating: WorkoutRating,
};
