// home-page.tsx

import React, { useCallback, useEffect, useState, useMemo, Fragment } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
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
import { addDays, format } from 'date-fns'
import { Space } from '../components/space';
import { getWorkoutTypeColor, getWorkoutTypeDescription } from '../workout-type-helpers';
import { Pedometer } from 'expo-sensors';
import { HelfyCommonModal } from '../components/helfy-common-modal';
import { HelfyColorPalette } from '../theme';
import { useSelectedWorkouts } from '../helfy-context';


export const HomePage = ({ route, navigation }: HomePageNavigationProp) => {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [workouts, setWorkouts] = useSelectedWorkouts();

    const {
        id,
        workoutSchedule
    } = route.params;

    const workoutType = useMemo(() => {
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
    }, [date])

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

    const getUpdateWorkoutFunction = useCallback(
        (index: number) => {
            function updateWorkout(action: React.SetStateAction<SelectedWorkout>) {
                if (action instanceof Function) {
                    setWorkouts(
                        prevWorkouts => {
                            prevWorkouts[index] = action(prevWorkouts[index]);
                            return prevWorkouts;
                        }
                    )
                } else {
                    setWorkouts(
                        prevWorkouts => {
                            prevWorkouts[index] = action;
                            return prevWorkouts;
                        }
                    )
                }
            }
        return updateWorkout;
    }, [setWorkouts])

    const removeWorkout = useCallback((index: number) => {
        setWorkouts(
            prevWorkouts => (
                prevWorkouts.filter((_, i) => i !== index)
            )
        );
    }, [setWorkouts]);

    const addWorkout = (selectedWorkout: SelectedWorkout) => {
        setWorkouts(prevWorkouts => [...prevWorkouts, selectedWorkout]);
    };

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
                    }}>{getWorkoutTypeDescription(workoutType)}</Text>
                </View>
            </HelfyCommonModal>
            <SafeAreaView style={styles.header}>
                { /* Calendar Header */ }
                <View style={styles.calendarRowContainer} >
                    <IconButton
                        onPress={() => setDate(prevDate => addDays(prevDate, -1))}
                        style={styles.chevronLeft}
                        icon={<ChevronLeftIcon color={'white'}/>}
                        onPressColor={'#00000080'}
                    />
                    <Pressable style={styles.calendarCore}>
                        <CalendarIcon color={'white'}/>
                        <Space width={8}/>
                        <Text style={styles.calendarDate}>{format(date, 'E - MMM d')}</Text>
                    </Pressable>
                    <IconButton
                        onPress={() => setDate(prevDate => addDays(prevDate, 1))}
                        style={styles.chevronRight}
                        icon={<ChevronRightIcon color={'white'}/>}
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
                    <View style={styles.sectionLabel}>
                        <Text style={styles.sectionTitle}>{'WORKOUTS'}</Text>
                    </View>
                    { /* Workout List */ }
                    <View style={styles.workoutList}>
                        {workouts.map((workout, i) => (
                            <SelectedWorkoutListItem
                                key={i}
                                selectedWorkout={workout}
                                workoutType={workoutType}
                                remove={() => removeWorkout(i)}
                                updateSelectedWorkout={getUpdateWorkoutFunction(i)}
                            />
                        ))}
                        <IconButton
                            onPress={
                                () => navigation.navigate('WorkoutSelection', {
                                    userId: id,
                                    workoutType: workoutType,
                                })
                            }
                            icon={<PlusCircleIcon color={'white'} />}
                            style={styles.iconButton}
                            onPressColor={'#00000040'}
                        />
                    </View>
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
        width: 18,
        height: 26,
        backgroundColor: HelfyColorPalette.primary2,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    modalContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    chevronRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 26,
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
    content: {
        backgroundColor: HelfyColorPalette.primary0,
        flex: 7,
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
        flex: 7,
        margin: 16,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    steps: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workoutList: {
        marginTop: 20,
        width: '100%',
        height: '75%',
        alignItems: 'center',
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
    }
});
