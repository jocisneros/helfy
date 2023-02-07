// types.tsx

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Start: undefined;
    Home: undefined;
    WorkoutSelection: undefined;
};

export type StartPageNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'Start'
>;

export type HomePageNavigationProp = NativeStackScreenProps<
    RootStackParamList, 
    'Home'
>;

export type WorkoutSelectionPageNavigationProp = NativeStackScreenProps<
    RootStackParamList,
    'WorkoutSelection'
>;