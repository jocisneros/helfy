// helfy-context.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState, useEffect, useMemo } from 'react';
import { HelfyEntryStatus, SelectedWorkout, UserSettings } from './types';

type SelectedWorkoutState = [
    SelectedWorkout[],
    React.Dispatch<React.SetStateAction<SelectedWorkout[]>>
];

type HelfyContextProps = {
    children: React.ReactNode,
};


const HelfyUserContext = React.createContext<UserSettings | undefined>(undefined);
const HelfyStatusContext = React.createContext(HelfyEntryStatus.Loading);
const HelfyWorkoutsContext = React.createContext<SelectedWorkoutState>([[], () => {}]);


export const useUserSettings = () => {
    return useContext(HelfyUserContext);
};

export const useEntryStatus = () => {
    return useContext(HelfyStatusContext);
};

export const useSelectedWorkouts = () => {
    return useContext(HelfyWorkoutsContext);
};


const HelfyWorkoutProvider = ({ children }: HelfyContextProps) => {
    const [selectedWorkouts, setSelectedWorkouts] = useState<SelectedWorkout[]>([]);

    // load day's workout from local storage
    useEffect(() => {
        AsyncStorage.getItem('persistentWorkouts')
        .then(storedWorkouts => {
            if (storedWorkouts === null) {
                return;
            }
            setSelectedWorkouts(JSON.parse(storedWorkouts) as SelectedWorkout[]);
        });
    }, []);

    // save day's workout to local storage
    useEffect(() => {
        AsyncStorage.setItem('persistentWorkouts', JSON.stringify(selectedWorkouts))
    }, [selectedWorkouts]);

    return (
        <HelfyWorkoutsContext.Provider value={[ selectedWorkouts, setSelectedWorkouts ]}>
            { children }
        </HelfyWorkoutsContext.Provider>
    )
};

export const HelfyProvider = ({ children }: HelfyContextProps) => {
    const [userSettings, setUserSettings] = useState<UserSettings>();
    const [entryStatus, setEntryStatus] = useState(HelfyEntryStatus.Loading);

    // attempt to load stored user settings
    useEffect(() => {
        AsyncStorage.getItem('userSettings')
        .then(storedSettings => {
            if (storedSettings !== null) {
                setUserSettings(JSON.parse(storedSettings) as UserSettings);
            }
            setEntryStatus(HelfyEntryStatus.Loaded);
        })
        .catch(error => setEntryStatus(HelfyEntryStatus.Error));
    }, []);

    // verify loaded user settings
    useEffect(() => {
        if (entryStatus !== HelfyEntryStatus.Loaded) {
            return;
        }

        if (userSettings !== undefined) {
            setEntryStatus(HelfyEntryStatus.ReturningUser);
        } else {
            setEntryStatus(HelfyEntryStatus.NewUser);
        }
    }, [userSettings, entryStatus]);

    return (
        <HelfyUserContext.Provider value={userSettings}>
            <HelfyStatusContext.Provider value={entryStatus}>
                <HelfyWorkoutProvider>
                    { children }
                </HelfyWorkoutProvider>
            </HelfyStatusContext.Provider>
        </HelfyUserContext.Provider>
    )
};
