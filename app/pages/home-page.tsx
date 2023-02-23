// home-page.tsx

import React, { useCallback, useEffect, useState, useMemo, Fragment } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { HomePageNavigationProp, MuscleGroup, Workout } from '../types';
import {
    CalendarIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusCircleIcon,
    ThreeDotsVerticalIcon
} from '../icons/icons';
import { MuscleGroupLabel } from '../components/muscle-group-label';
import { WorkoutListItem } from '../components/workout-list-item';
import { IconButton } from '../components/icon-button';
import { addDays, format } from 'date-fns'
import { Space } from '../components/space';
import { HelfyModal } from '../components/helfy-modal';
import { getMuscleGroupDescription, getMuscleGroupLabelColor } from '../muscle-group-helpers';
import { Pedometer } from 'expo-sensors';
import { HelfyCommonModal } from '../components/helfy-common-modal';

const mockLegs: Workout[] = [
    {
        name: 'Leg Press',
    },
    {
        name: 'Squats',
    },
    {
        name: 'Leg Extension',
    },
    {
        name: 'Calf Raises',
    },
];

export const HomePage = ({ route, navigation }: HomePageNavigationProp) => {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [workouts, setWorkouts] = useState(mockLegs);

    const [isPedometerAvailable, setIsPedometerAvailable] = useState(false);
    const [todaysStepCount, setTodaysStepCount] = useState(0);

    const muscleGroup = MuscleGroup.Legs;
    const muscleGroupLabelColor = getMuscleGroupLabelColor(muscleGroup);

    const subscribeToPedometer = useCallback(async () => {
        const isAvailable = await Pedometer.isAvailableAsync();
        setIsPedometerAvailable(isAvailable);

        if (isAvailable) {
            const start = addDays(date, -1)
            // const start = date;
            // start.setHours(0, 0, 0, 0);
            const stepCount = await Pedometer.getStepCountAsync(start, date);
            setTodaysStepCount(stepCount ? stepCount.steps : 0);
        }
    }, [date]);

    useEffect(() => {
        subscribeToPedometer();
    }, [subscribeToPedometer]);

    return (
        <Fragment>
            <HelfyCommonModal
                isVisible={showModal}
                title={muscleGroup.toUpperCase()}
                headerColor={muscleGroupLabelColor}
                onClose={() => setShowModal(false)}
            >
                <View style={{...styles.modalContainer, height: '15%'}}>
                    <Text style={{
                        fontFamily: 'Lato_400Regular',
                        fontSize: 16,
                        color: '#FFF',
                    }}>{getMuscleGroupDescription(muscleGroup)}</Text>
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
                <MuscleGroupLabel
                    muscleGroup={muscleGroup}
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
                            <WorkoutListItem
                                key={i}
                                workout={workout}
                                muscleGroup={muscleGroup}
                                remove={() => setWorkouts( prevWorkouts => 
                                    prevWorkouts.filter((_, index) => index !== i))
                                }
                            />
                        ))}
                        <IconButton
                            onPress={() => navigation.navigate('WorkoutSelection')}
                            icon={<PlusCircleIcon color={'white'} />}
                            style={styles.iconButton}
                            onPressColor={'#00000040'}
                        />
                    </View>
                </View>
                <View style={styles.steps}>
                    <View style={styles.sectionLabel}>
                        <Text style={styles.sectionTitle}>STEPS</Text>
                    </View>
                    <Text style={styles.sectionTitle}>{todaysStepCount}</Text>
                </View>
            </SafeAreaView>
      </Fragment>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3B463C',
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
        backgroundColor: '#303730',
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#242424',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        overflow: 'hidden',
    },
    chevronRight: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 18,
        height: 26,
        backgroundColor: '#303730',
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
        backgroundColor: '#303730',
        marginHorizontal: 12,
    },
    content: {
        backgroundColor: '#303730',
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#3B463C',
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
