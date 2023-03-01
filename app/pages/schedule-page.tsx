// schedule-page.tsx

import React, { Fragment, useCallback, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableHighlight} from 'react-native';
import { SchedulePageNavigationProp, WorkoutType, WorkoutSchedule, UserSettings } from '../types';
import { WorkoutTypeLabel } from '../components/workout-type-label';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import { HelfyCommonModal } from '../components/helfy-common-modal';

type WorkoutDaySetter = (muscleGroup: WorkoutType) => void;

function recommendedSchedule(frequency: number): WorkoutSchedule {
    const emptySchedule: WorkoutSchedule = {
        sunday: WorkoutType.None,
        monday: WorkoutType.None,
        tuesday: WorkoutType.None,
        wednesday: WorkoutType.None,
        thursday: WorkoutType.None,
        friday: WorkoutType.None,
        saturday: WorkoutType.None,
    };

    switch (frequency) {
        case 1:
            return {
                ...emptySchedule,
                wednesday: WorkoutType.FullBody
            };
        case 2:
            return {
                ...emptySchedule,
                tuesday: WorkoutType.UpperBody,
                thursday: WorkoutType.Legs,
            };
        case 3:
            return {
                ...emptySchedule,
                monday: WorkoutType.Pull,
                wednesday: WorkoutType.Push,
                friday: WorkoutType.Legs,
            }
        case 4:
            return {
                ...emptySchedule,
                monday: WorkoutType.Pull,
                tuesday: WorkoutType.Push,
                wednesday: WorkoutType.Legs,
                friday: WorkoutType.FullBody,
            }
        case 5:
            return {
                ...emptySchedule,
                monday: WorkoutType.Pull,
                tuesday: WorkoutType.Push,
                wednesday: WorkoutType.Legs,
                friday: WorkoutType.UpperBody,
                saturday: WorkoutType.Legs,
            }
        case 6:
            return {
                ...emptySchedule,
                monday: WorkoutType.Pull,
                tuesday: WorkoutType.Push,
                wednesday: WorkoutType.Legs,
                thursday: WorkoutType.Arms,
                friday: WorkoutType.ChestAndBack,
                saturday: WorkoutType.Legs,
            }
    }

    return emptySchedule;
}

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const weekdayMap = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6,
};

function sortWeekdays(weekdayA: string, weekdayB: string): number {
    return weekdayMap[weekdayA as keyof typeof weekdayMap] - weekdayMap[weekdayB as keyof typeof weekdayMap];
}

export const SchedulePage = ({ route, navigation }: SchedulePageNavigationProp) => {
    const { weight, height, age, sex } = route.params;

    const [modalContents, setModalContents] = useState<React.ReactNode>(null);
    const [workoutFrequency, setWorkoutFrequency] = useState(3);
    const [workoutSchedule, setWorkoutSchedule] = useState<WorkoutSchedule>(recommendedSchedule(3));

    const updateSchedule = useCallback((frequency: number) => {
        setWorkoutFrequency(frequency);
        setWorkoutSchedule( recommendedSchedule(frequency) );
    }, []);

    const saveUserInfo = useCallback(async () => {
        const userSettings: UserSettings = {
            id: uuidv4(),
            weight: weight,
            height: height,
            sex: sex,
            age: age,
            workoutSchedule: workoutSchedule,
        };

        await AsyncStorage.setItem('userSettings', JSON.stringify(userSettings));

        navigation.navigate('Home', userSettings);
    }, [navigation, workoutSchedule])

    const onMuscleGroupLabelPress = useCallback((setWorkoutDay: WorkoutDaySetter) => {
        setModalContents((
            <View style={{ height: '100%', justifyContent: 'space-evenly' }}>
                {
                    Object.keys(WorkoutType).map(
                        (key: string, i: number) => {
                            const workoutType = WorkoutType[key as (keyof typeof WorkoutType)];
                            return (
                                <WorkoutTypeLabel
                                    key={i}
                                    workoutType={workoutType}
                                    onPress={() => setWorkoutDay(workoutType)}
                                />
                            )
                        }
                    )
                }
            </View>
        ));
    }, []);

    return (
        <Fragment>
            <HelfyCommonModal
                title={'WORKOUT TYPE'}
                headerColor={'#808080'}
                height={'45%'}
                isVisible={modalContents !== null}
                onClose={() => setModalContents(null)}
            >
                {modalContents}
            </HelfyCommonModal>
            <SafeAreaView style={styles.container}>
                <View style={styles.sectionLabel}>
                    <Text style={styles.sectionTitle}>{'SCHEDULE'}</Text>
                </View>
                <View style={styles.frequencySelection}>
                    <Text style={styles.text}>{'FREQUENCY : '}</Text>
                    <Picker
                        mode='dropdown'
                        selectedValue={workoutFrequency}
                        style={styles.picker}
                        onValueChange={(itemValue) => updateSchedule(itemValue)}
                    >
                        {
                            [...Array(7).keys()].slice(1).map(
                                day => (
                                    <Picker.Item
                                        key={`picker-${day}`}
                                        label={`${day} ${day > 1 ? 'DAYS' : 'DAY'}`}
                                        value={day}
                                        color='white'
                                    />
                                )
                            )
                        }
                    </Picker>
                </View>
                <View style={styles.scheduleContainer}>
                    {
                        Object.entries(workoutSchedule).sort((a, b) => sortWeekdays(a[0], b[0])).map(
                            ([dayString, workoutType], i) => (
                                <View style={styles.weekdayRow} key={i}>
                                    <Text style={[styles.text, { width: 110 }]}>{`${weekdays[i]}: `}</Text>
                                    <View style={styles.labelContainer}>
                                        <WorkoutTypeLabel
                                            workoutType={workoutType}
                                            onPress={() => onMuscleGroupLabelPress(
                                                (workoutType: WorkoutType) => {
                                                    setWorkoutSchedule(prevSchedule => {
                                                        prevSchedule[dayString as keyof WorkoutSchedule] = workoutType;
                                                        setModalContents(null);
                                                        return prevSchedule;
                                                    })
                                                }
                                            )}
                                        />
                                    </View>
                                </View>
                            )
                        )
                    }
                </View>
                <TouchableHighlight
                    onPress={saveUserInfo}
                    style={styles.saveButton}
                    underlayColor={styles.saveButton.backgroundColor + '80'}
                >
                    <Text style={styles.sectionTitle}>{'SAVE'}</Text>
                </TouchableHighlight>
            </SafeAreaView>
      </Fragment>
    );
}

const styles = StyleSheet.create({
    picker: {
        width: 130,
        height: 110,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#303730',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sectionLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#242424',
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#78CF81',
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    frequencySelection: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#242424',
        padding: 16,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 12,
    },
    scheduleContainer: {
        height: '55%',
        width: '85%',
        backgroundColor: '#242424',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 16,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 24,
    },
    weekdayRow: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: 'white',
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
    },
    labelContainer: {
        width: 136,
        alignItems: 'center',

    }
})