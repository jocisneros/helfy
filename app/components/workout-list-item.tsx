// workout-list-item.tsx

import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Workout } from '../types';
import {
    DotIcon,
    InfoCircleIcon,
    ThreeDotsIcon,
} from '../icons/icons';
import { CheckButton } from './check-button';
import { IconButton } from './icon-button';

type WorkoutListItemProps = {
    workout: Workout,
    setModalContents?: (element: React.ReactNode) => void,
}

type WorkoutLabelProps = {
    weight: number,
    sets: number,
    reps: number,
}

const WorkoutLabel = ({
    weight,
    sets,
    reps
}: WorkoutLabelProps) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 3,
            paddingHorizontal: 8,
            borderRadius: 20,
            backgroundColor: '#CFCFCF',
        }}>
            <Text style={{
                fontFamily: 'Lato_700Bold',
                color: '#303730',
                fontSize: 16,
                paddingRight: 4,
            }}>{weight}</Text>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: '#BABABA',
                paddingHorizontal: 4,
                borderRadius: 20,
            }}>
                <Text style={{ fontFamily: 'Lato_700Bold', color: '#303730', fontSize: 14}} >{sets}</Text>
                <DotIcon color={'#303730'} style={{ margin: 0, padding: 0}}/>
                <Text style={{ fontFamily: 'Lato_700Bold', color: '#303730', fontSize: 14}} >{reps}</Text>
            </View>
        </View>
    )
}

export const WorkoutListItem = ({
    workout,
    setModalContents
}: WorkoutListItemProps) => {
    const [isChecked, setChecked] = useState(false); 

    const [workoutWeight, setWorkoutWeight] = useState(270);
    const [workoutSets, setWorkoutSets] = useState(3);
    const [workoutReps, setWorkoutReps] = useState(8);

    const openWorkoutInfoModal = useCallback(() => setModalContents && setModalContents(
        <View style={{
            width: '80%',
            height: '50%',
            backgroundColor: '#445046',
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <View style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3C443C',
                paddingVertical: 12,
            }}>
                <Text style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 20,
                    color: '#CFCFCF',
                }}>{workout.name.toUpperCase()}</Text>
            </View>
            <Text style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 16,
                color: '#FFF',
            }}>DEMO</Text>
            <View style={{ width: '90%', height: 160, backgroundColor: 'gray', marginVertical: 16}}></View>
            <Text style={{
                fontFamily: 'Lato_700Bold',
                fontSize: 16,
                color: '#FFF',
            }}>TIPS</Text>
        </View>
    ), [setModalContents])

    const openWorkoutMenuModal = useCallback(() => setModalContents && setModalContents(
        <View style={{
            width: '80%',
            height: '20%',
            backgroundColor: '#445046',
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            <View style={{
                position: 'absolute',
                top: 0,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#3C443C',
                paddingVertical: 12,
            }}>
                <Text style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 20,
                    color: '#CFCFCF',
                }}>{workout.name.toUpperCase()}</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 16,
                        color: '#FFF',
                        textAlign: 'center',
                    }}>{`WEIGHT: ${workoutWeight}`}</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 16,
                        color: '#FFF',
                    }}>{`SETS: ${workoutSets}`}</Text>
                    <DotIcon color={'#FFF'} style={{marginHorizontal: 16}}/>
                    <Text style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 16,
                        color: '#FFF',
                    }}>{`REPS: ${workoutReps}`}</Text>
                </View>
            </View>
        </View>
    ), [setModalContents])

    return (
        <View style={styles.container} >
            <CheckButton
                isChecked={isChecked}
                onPress={() => setChecked(!isChecked)}
                style={isChecked ? styles.checkedButton : styles.uncheckedButton}
            />
            <View style={styles.workoutTitleContainer}>
                <Text
                    numberOfLines={1}
                    style={styles.workoutTitle}
                >
                    {workout.name.toUpperCase()}
                </Text>
                <IconButton
                    style={styles.iconButton}
                    icon={<InfoCircleIcon color={'#CFCFCF'}/>}
                    onPress={openWorkoutInfoModal}
                    onPressColor={'#00000040'}
                />
            </View>
            <WorkoutLabel weight={workoutWeight} sets={workoutSets} reps={workoutReps} />
            <IconButton
                style={styles.menuButton}
                icon={<ThreeDotsIcon color={'#CFCFCF'}/>}
                onPress={openWorkoutMenuModal}
                onPressColor={'#00000040'}
            />
        </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3B463C',
        width: '95%',
        paddingHorizontal: 10,
        height: 58,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    workoutTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workoutTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: '#FFFFFF',
        width: 135,
        marginRight: 8,
    },
    uncheckedButton: {
        display: 'flex',
        backgroundColor: '#D9D9D9',
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    checkedButton: {
        display: 'flex',
        backgroundColor: '#78CF81',
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    menuButton: {
        display: 'flex',
        backgroundColor: '#445046',
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
    }
});
