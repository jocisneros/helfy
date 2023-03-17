// helfy-context.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { isSameDay } from 'date-fns';
import React, { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { HelfyHttpClient } from './helfy-http-client';
import { getWorkoutTypeFromSchedule } from './helpers';
import { ExperienceLevel, HelfyEntryStatus, SelectedWorkout, UserSettings, WorkoutType } from './types';

type SelectedWorkoutState = [
    SelectedWorkout[],
    React.Dispatch<React.SetStateAction<SelectedWorkout[]>>,
    boolean,
];

type UserSettingsState = [
    UserSettings,
    React.Dispatch<React.SetStateAction<UserSettings>>
];

type HelfyContextProps = {
    children: React.ReactNode,
};

const StartUpUserSettings: UserSettings = {
    id: '',
    weight: -1,
    height: {
        feet: -1,
        inches: -1,
    },
    sex: '',
    experienceLevel: ExperienceLevel.Unassigned,
    workoutSchedule: {
        sunday: WorkoutType.None,
        monday: WorkoutType.None,
        tuesday: WorkoutType.None,
        wednesday: WorkoutType.None,
        thursday: WorkoutType.None,
        friday: WorkoutType.None,
        saturday: WorkoutType.None,
    }
};

const HelfyUserContext = React.createContext<UserSettingsState>([StartUpUserSettings, () => {}]);
const HelfyStatusContext = React.createContext(HelfyEntryStatus.Loading);
const HelfyWorkoutsContext = React.createContext<SelectedWorkoutState>([[], () => {}, false]);
const HelfyDayContext = React.createContext<[Date, WorkoutType]>([new Date(), WorkoutType.None]);

export const useUserSettings = () => {
    return useContext(HelfyUserContext);
};

export const useEntryStatus = () => {
    return useContext(HelfyStatusContext);
};

export const useSelectedWorkouts = () => {
    return useContext(HelfyWorkoutsContext);
};

export const useDay = () => {
    return useContext(HelfyDayContext);
};


const HelfyWorkoutProvider = ({ children }: HelfyContextProps) => {
    const [selectedWorkouts, setSelectedWorkouts] = useState<SelectedWorkout[]>([]);

    const [today, ] = useDay();

    const [lastSyncDate, setLastSyncDate] = useState<Date>(new Date());
    const [syncDate, setSyncDate] = useState<Date>(new Date());

    const [syncToDB, setSyncToDB] = useState(false);
    const [userSettings, ] = useUserSettings();

    const loadStoredData = useCallback(async () => {
        const rawPersistentWorkouts = await AsyncStorage.getItem('persistentWorkouts');

        if (rawPersistentWorkouts === null) {
            return;
        }

        const persistentWorkouts = JSON.parse(rawPersistentWorkouts) as SelectedWorkout[];

        const lastStoredSync = await AsyncStorage.getItem('lastSync');

        if (lastStoredSync === null) {
            setSelectedWorkouts(persistentWorkouts);
            return;
        }

        const lastStoredSyncDate = new Date(JSON.parse(lastStoredSync) as Date);

        setLastSyncDate(lastStoredSyncDate);
        setSelectedWorkouts(persistentWorkouts);

        if (!isSameDay(new Date(), lastStoredSyncDate)) {
            setSyncToDB(true);
        }
        return;
    }, []);

    // load day's workout from local storage
    useEffect(() => {
        loadStoredData();
    }, [loadStoredData]);

    const syncWorkoutToDB = useCallback(async () => {
        // no user + no need to sync + nothing to sync
        if (userSettings.id === '' || !syncToDB || selectedWorkouts.length === 0) {
            return;
        }

        const workoutType = getWorkoutTypeFromSchedule(lastSyncDate, userSettings.workoutSchedule);

        await HelfyHttpClient.postWorkoutData(
            userSettings.id,
            lastSyncDate,
            workoutType,
            selectedWorkouts
        );

        setSyncToDB(false);
        setLastSyncDate(new Date());
        setSelectedWorkouts([]);
    }, [lastSyncDate, selectedWorkouts, syncDate, userSettings]);

    useEffect(() => {
        syncWorkoutToDB();
    }, [syncWorkoutToDB]);

    // update locally stored data sync time
    useEffect(() => {
        if (syncToDB) {
            return;
        }

        AsyncStorage.setItem('lastSync', JSON.stringify(syncDate))
        .then(() => { return; });
    }, [syncDate, syncToDB]);

    // save day's workout to local storage
    useEffect(() => {
        if (syncToDB) {
            return;
        }

        AsyncStorage.setItem('persistentWorkouts', JSON.stringify(selectedWorkouts))
        .then( () => setSyncDate(new Date()) );
    }, [selectedWorkouts, syncToDB]);

    // send to database if new day has passed
    useEffect(() => {
        if (syncToDB) {
            return;
        }

        if (isSameDay(lastSyncDate, syncDate)) {
            setLastSyncDate(lastSyncDate);
        } else {
            setSyncToDB(true);
        }
    }, [syncDate, syncToDB, lastSyncDate]);

    // sync if new day
    useEffect(() => {
        if (syncToDB || isSameDay(today, lastSyncDate)) {
            return;
        }

        setSyncToDB(true);
    }, [today, lastSyncDate, syncToDB])

    return (
        <HelfyWorkoutsContext.Provider value={[ selectedWorkouts, setSelectedWorkouts, syncToDB ]}>
            { children }
        </HelfyWorkoutsContext.Provider>
    )
};

const HelfyDayProvider = ({ children }: HelfyContextProps) => {
    const [dateTime, setDateTime] = useState(new Date);
    const [{ workoutSchedule }, ] = useUserSettings();


    // keep date updated (update every 10s)
    useEffect(() => {
        const timeUpdateInterval = setInterval(
            () => setDateTime( new Date() ),
            10_000
        );

        return () => clearInterval(timeUpdateInterval);
    }, []);

    const workoutType = useMemo(
        () => getWorkoutTypeFromSchedule(dateTime, workoutSchedule)
    , [dateTime, workoutSchedule]);

    return (
        <HelfyDayContext.Provider value={[dateTime, workoutType]}>
            { children }
        </HelfyDayContext.Provider>
    );
}

export const HelfyProvider = ({ children }: HelfyContextProps) => {
    const [userSettings, setUserSettings] = useState<UserSettings>(StartUpUserSettings);
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

        if (userSettings.id !== '') {
            setEntryStatus(HelfyEntryStatus.ReturningUser);
        } else {
            setEntryStatus(HelfyEntryStatus.NewUser);
        }
    }, [userSettings, entryStatus]);

    // update settings on change
    useEffect(() => {
        AsyncStorage.setItem('userSettings', JSON.stringify(userSettings))
        .then(() => { return; });
    }, [userSettings]);

    return (
        <HelfyUserContext.Provider value={[userSettings, setUserSettings]}>
            <HelfyStatusContext.Provider value={entryStatus}>
                <HelfyDayProvider>
                    <HelfyWorkoutProvider>
                        { children }
                    </HelfyWorkoutProvider>
                </HelfyDayProvider>
            </HelfyStatusContext.Provider>
        </HelfyUserContext.Provider>
    )
};
