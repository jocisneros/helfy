// types.tsx

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// App Types

export type Workout = {
    id: number,
    name: string,
    difficulty: number,
    link: string,
    tips: string,
};

export type SelectedWorkout = Workout & {
    weight: number,
    setCount: number,
    repititionCount: number,
    rating: WorkoutRating,
};

export enum ExperienceLevel {
    Unassigned = -1,
    Beginner = 0,
    Intermediate = 1,
    Advanced = 2,
};

export enum WorkoutType {
    Legs = 'Legs',
    Arms = 'Arms',
    ChestAndBack = 'Chest/Back',
    Push = 'Push',
    Pull = 'Pull',
    UpperBody = 'Upper Body',
    FullBody = 'Full Body',
    None = 'Break',
};

export enum WorkoutRating {
    ThumbsDown = -2,
    Incomplete = -1,
    Unrated = 0,
    ThumbsUp = 1,
    DoubleThumbsUp = 3,
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
    height: Height,
    weight: number,
    sex: string,
    experienceLevel: ExperienceLevel,
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

type WorkoutSelectionProps = {
    userId: string,
    workoutType: WorkoutType,
};


export type RootStackParamList = {
    Start: undefined;
    Schedule: Omit<Omit<UserSettings, 'id'>, 'workoutSchedule'>;
    Home: undefined;
    WorkoutSelection: WorkoutSelectionProps;
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

export type UserData = Omit<UserSettings, 'workoutSchedule'>;

export type StoredWorkout = Omit<Omit<Omit<SelectedWorkout, 'difficulty'>, 'link'>, 'tips'>;

export type WorkoutData = {
    id: number,
    date: string,
    type: WorkoutType,
    workouts: Workout[],
};

export type WorkoutHistoryResponse = {
    id: number,
    sets: number,
    reps: number,
    weight: number,
    name: string,
    rating: WorkoutRating
};
