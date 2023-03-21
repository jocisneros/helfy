// home-page.tsx

import React, { useCallback, useEffect, useState, useMemo, Fragment } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { HomePageNavigationProp, SelectedWorkout, Workout, WorkoutType } from '../types';
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusCircleIcon,
} from '../icons/icons';
import { WorkoutTypeLabel } from '../components/workout-type-label';
import { SelectedWorkoutListItem } from '../components/selected-workout-list-item';
import { IconButton } from '../components/icon-button';
import { add, addDays, compareAsc, format, isSameDay } from 'date-fns'
import { Space } from '../components/space';
import { getWorkoutTypeColor, getWorkoutTypeDescription } from '../workout-type-helpers';
import { Pedometer } from 'expo-sensors';
import { HelfyCommonModal } from '../components/helfy-common-modal';
import { HelfyColorPalette } from '../theme';
import { useDay, useSelectedWorkouts, useUserSettings } from '../helfy-context';
import { HelfyHttpClient } from '../helfy-http-client';
import { getWorkoutTypeFromSchedule } from '../helpers';


export const HomePage = ({ route, navigation }: HomePageNavigationProp) => {
    const [{
        id,
        workoutSchedule
    },] = useUserSettings();

    const [today, ] = useDay();
    const [dateOffset, setDateOffset] = useState(0);

    const [showModal, setShowModal] = useState(false);
    const [pastDayWorkouts, setPastDayWorkouts] = useState<SelectedWorkout[]>([]);
    const [selectedWorkouts, setSelectedWorkouts, isSyncingToDB] = useSelectedWorkouts();
    const [isLoading, setLoading] = useState(false);
    
    const [date, setDate] = useState(today);

    useEffect(() => {
        const updatedDate = addDays(today, dateOffset);

        if (isSameDay(updatedDate, date)) {
            return;
        }

        setDate(updatedDate);
        setPastDayWorkouts([]);
    }, [date, today, dateOffset]);

    const workoutType = useMemo(
        () => getWorkoutTypeFromSchedule(date, workoutSchedule)
    , [date, workoutSchedule]);

    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [todaysStepCount, setTodaysStepCount] = useState(0);

    const subscribeToPedometer = useCallback(async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const start = new Date(date);
            start.setHours(0, 0, 0, 0);

            const end = new Date(date);
            end.setHours(23, 59, 59, 99);

            const stepCount = await Pedometer.getStepCountAsync(start, end);
            setTodaysStepCount(stepCount ? stepCount.steps : 0);
        }
    }, [date]);

    useEffect(() => {
        subscribeToPedometer();
    }, [subscribeToPedometer]);

    useEffect(() => {
        if ( dateOffset >= 0 ) {
            return;
        }

        setLoading(true);
        HelfyHttpClient.getWorkoutHistory(id, date).then(
            data => {
                setPastDayWorkouts(data);
                setLoading(false);
            }
        );
    }, [date, id]);

    const getUpdateWorkoutFunction = useCallback(
        (index: number) => {
            function updateWorkout(action: React.SetStateAction<SelectedWorkout>) {
                if (action instanceof Function) {
                    setSelectedWorkouts(prevSelectedWorkouts => prevSelectedWorkouts.map(
                        ( workout, i ) => {
                            return i === index ? action(workout) : workout;
                        }
                    ));
                } else {
                    setSelectedWorkouts(prevSelectedWorkouts => prevSelectedWorkouts.map(
                        ( workout, i ) => {
                            return i === index ? action : workout;
                        }
                    ));
                }
            }
        return updateWorkout;
    }, [setSelectedWorkouts])

    const removeWorkout = useCallback((index: number) => {
        setSelectedWorkouts(
            prevSelectedWorkouts => (
                prevSelectedWorkouts.filter((_, i) => i !== index)
            )
        );
    }, [setSelectedWorkouts]);

    const isToday = dateOffset === 0;

    const isBreakDay = workoutType === WorkoutType.None;

    const homeContent = useMemo(() => {
        let selectedWorkoutsForDay: SelectedWorkout[] = [];

        if (isToday) {
            selectedWorkoutsForDay = selectedWorkouts;
        } else if (dateOffset < 0) {
            selectedWorkoutsForDay = pastDayWorkouts;
        }

        if (selectedWorkoutsForDay.length === 0) {
            return null;
        }
        
        const showSpinner = isLoading || isSyncingToDB;

        return (
            <View style={styles.workoutList}>
                <ScrollView
                    style={{ flexGrow: 0 }} contentContainerStyle={styles.workoutListContainer}
                >
                    { /* Workout List */ }
                        {
                            showSpinner
                            ? (
                                <ActivityIndicator
                                    color={'white'}
                                    size={'large'}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            )
                            : (
                                selectedWorkoutsForDay.map((workout, i) => (
                                    <SelectedWorkoutListItem
                                        key={i}
                                        selectedWorkout={workout}
                                        workoutType={workoutType}
                                        remove={() => removeWorkout(i)}
                                        readOnly={!(isToday && !isBreakDay)}
                                        updateSelectedWorkout={getUpdateWorkoutFunction(i)}
                                    />
                                ))
                            )
                        } 
                </ScrollView>
            </View>
        );
    },
    [
        pastDayWorkouts,
        selectedWorkouts,
        workoutType,
        navigation,
        getUpdateWorkoutFunction,
        removeWorkout,
        dateOffset,
        isLoading,
        isSyncingToDB,
    ]);

    return (
        <Fragment>
            <HelfyCommonModal
                isVisible={showModal}
                title={workoutType.toUpperCase()}
                headerColor={getWorkoutTypeColor(workoutType)}
                onClose={() => setShowModal(false)}
                height={'15%'}
            >
                <View style={styles.modalContainer}>
                    <Text style={{
                        fontFamily: 'Lato_400Regular',
                        fontSize: 16,
                        color: '#FFF',
                        textAlign: 'center'
                    }}>{getWorkoutTypeDescription(workoutType)}</Text>
                </View>
            </HelfyCommonModal>
            <SafeAreaView style={styles.header}>
                { /* Calendar Header */ }
                <View style={styles.calendarRowContainer} >
                    <IconButton
                        onPress={() => setDateOffset(prevOffset => prevOffset - 1) }
                        style={styles.chevronLeft}
                        icon={<ChevronLeftIcon color={'white'} strokeWidth={1} stroke={'white'} />}
                        onPressColor={'#00000080'}
                    />
                    <Pressable style={styles.calendarCore}>
                        <CalendarIcon color={'white'} width={20} height={20} />
                        <Space width={8}/>
                        <Text style={styles.calendarDate}>{format(date, 'E - MMM d')}</Text>
                    </Pressable>
                    <IconButton
                        onPress={() =>  setDateOffset(prevOffset => prevOffset + 1) }
                        style={styles.chevronRight}
                        icon={<ChevronRightIcon color={'white'} strokeWidth={1} stroke={'white'} />}
                        onPressColor={'#00000080'}
                    />
                </View>
                <WorkoutTypeLabel
                    workoutType={workoutType}
                    onPress={() => setShowModal(true)}
                />
                <Space height={16}/>
            </SafeAreaView>
            <SafeAreaView style={styles.content}>
                { /* Workout Contents */ }
                <View style={styles.workouts}>
                    { /* Section Label */ }
                    <Space height={16} />
                    <View style={styles.sectionLabel}>
                        <Text style={styles.sectionTitle}>{'WORKOUTS'}</Text>
                    </View>
                    { homeContent }
                    { (isToday && !isBreakDay && !isSyncingToDB) && (
                        <IconButton
                            onPress={
                                () => navigation.navigate('WorkoutSelection', {
                                    userId: id,
                                    workoutType: workoutType,
                                })
                            }
                            icon={<PlusCircleIcon color={'white'} width={32} height={32} />}
                            style={styles.addWorkoutButton}
                            onPressColor={'#00000040'}
                        />
                    )}
                </View>
                {
                    isPedometerAvailable &&
                    <View style={styles.steps}>
                        <View style={styles.sectionLabel}>
                            <Text style={styles.sectionTitle}>STEPS</Text>
                        </View>
                        <Text style={styles.sectionTitle}>{todaysStepCount}</Text>
                    </View>
                }
            </SafeAreaView>
      </Fragment>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: HelfyColorPalette.primary1,
        width: '100%',
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarDate: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: 'white',
        width: 150,
        textAlign: 'center',
    },
    calendarRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    chevronLeft: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 28,
        backgroundColor: HelfyColorPalette.primary2,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    chevronRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 28,
        backgroundColor: HelfyColorPalette.primary2,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    calendarCore: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        height: 36,
        borderRadius: 12,
        backgroundColor: HelfyColorPalette.primary2,
        marginHorizontal: 12,
    },
    modalContainer: {
        height: '100%',
        width: '80%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    content: {
        backgroundColor: HelfyColorPalette.primary0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: HelfyColorPalette.primary1,
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    workouts: {
        width: '95%',
        margin: 16,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
    },
    steps: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
    },
    workoutList: {
        maxHeight: '73%',
        marginTop: 8,
        marginBottom: 12,
        paddingVertical: 16,
    },
    workoutListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    addWorkoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
    }
});
