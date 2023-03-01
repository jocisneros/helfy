// workout-list-item.tsx

import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { WorkoutType, WorkoutRating, SelectedWorkout } from '../types';
import {
    DoubleThumbsUpIcon,
    InfoCircleIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
    TrashIcon,
} from '../icons/icons';
import { CheckButton } from './check-button';
import { IconButton } from './icon-button';
import { Picker } from '@react-native-picker/picker';
import { WorkoutLabel } from './workout-label';
import { getWorkoutTypeColor } from '../workout-type-helpers';
import { Space } from './space';
import { HelfyCommonModal } from './helfy-common-modal';

enum ModalType {
    None = 'None',
    Menu = 'Menu',
    Info = 'Info',
    Rating = 'Rating',
};


type SelectedWorkoutListItemProps = {
    selectedWorkout: SelectedWorkout,
    updateSelectedWorkout: React.Dispatch<React.SetStateAction<SelectedWorkout>>,
    workoutType: WorkoutType,
    remove?: () => void,
};


export const SelectedWorkoutListItem = ({
    selectedWorkout,
    workoutType,
    updateSelectedWorkout,
    remove
}: SelectedWorkoutListItemProps) => {
    const [isChecked, setChecked] = useState(false); 

    const setWeight = useCallback((weight: number) => {
        updateSelectedWorkout(prevWorkoutData => ({...prevWorkoutData, weight: weight}));
    }, [updateSelectedWorkout]);

    const setSetCount = useCallback((setCount: number) => {
        updateSelectedWorkout(prevWorkoutData => ({...prevWorkoutData, setCount: setCount}));
    }, [updateSelectedWorkout]);

    const setRepitionCount = useCallback((repitionCount: number) => {
        updateSelectedWorkout(prevWorkoutData => ({...prevWorkoutData, repitionCount: repitionCount}));
    }, [updateSelectedWorkout]);

    const setRating = useCallback((rating: number) => {
        updateSelectedWorkout(prevWorkoutData => ({...prevWorkoutData, rating: rating}));
    }, [updateSelectedWorkout]);

    const [modalType, setModalType] = useState<ModalType>(ModalType.None);

    const modalContents = useMemo(() => {
        switch (modalType) {
            case ModalType.Info:
                return (
                    <View style={styles.modalContainer}>
                        <View style={{height: '45%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.modalText}>DEMO</Text>
                            { /* TEMPORARY*/ }
                            <View style={{
                                width: '90%',
                                height: 160,
                                backgroundColor:
                                'gray',
                                marginVertical: 16
                                }}
                            />
                        </View>
                        <View style={{height: '45%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.modalText}>TIPS</Text>
                            <Space height={16}/>
                            <View style={{
                                width: '90%',
                                height: 16,
                                backgroundColor:
                                'gray',
                                marginBottom: 16
                                }}
                            />
                            <View style={{
                                width: '90%',
                                height: 16,
                                backgroundColor:
                                'gray',
                                marginBottom: 16
                                }}
                            />
                            <View style={{
                                width: '90%',
                                height: 16,
                                backgroundColor:
                                'gray',
                                marginBottom: 16
                                }}
                            />
                        </View>
                    </View>
                );
            case ModalType.Menu:
                return (
                    <View style={styles.modalContainer}>
                        <View style={styles.centeredRow}>
                            <Text style={styles.modalText}>{'WEIGHT: '}</Text>
                            <Space width={8}/>
                            <TextInput
                                returnKeyType='done'
                                style={styles.modalTextInput}
                                keyboardType='numeric'
                                onChangeText={(text) => {
                                    setWeight(parseFloat(text || '0'))
                                }}
                                value={selectedWorkout.weight.toString()}
                                maxLength={4}
                            />
                        </View>
                        <View style={{ backgroundColor: 'white', marginVertical: 16, height: 0.5, width: 250 }} />
                        <View style={styles.centeredRow}>
                            <Text style={styles.modalText}>{'SETS: '}</Text>
                            <Picker
                                style={styles.picker}
                                mode='dropdown'
                                selectedValue={selectedWorkout.setCount}
                                onValueChange={(itemValue) => setSetCount(itemValue)}
                            >
                                {[...Array(50).keys()].map(n => (
                                    <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                                ))}
                            </Picker>
                            <Text style={styles.modalText}>{'REPS: '}</Text>
                            <Picker
                                style={styles.picker}
                                mode='dropdown'
                                selectedValue={selectedWorkout.repititionCount}
                                onValueChange={(itemValue) => setRepitionCount(itemValue)}
                            >
                                {[...Array(50).keys()].map(n => (
                                    <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                                ))}
                            </Picker>
                        </View>
                        {
                            remove && 
                            <IconButton
                                onPress={() => { setModalType(ModalType.None); remove(); }}
                                icon={<TrashIcon color={'white'} />}
                                style={styles.removeButton}
                            />
                        }
                    </View>
                );
            case ModalType.Rating:
                return (
                    <View style={[styles.modalContainer, { justifyContent: 'space-evenly' }]}>
                        <Text style={styles.modalTitle}>{'🎉 CONGRATS 🎉'}</Text>
                        {/* <Space height={20}/> */}
                        <Text style={styles.modalText}>{'RATE YOUR WORKOUT'}</Text>
                        {/* <Space height={20}/> */}
                        <View style={styles.centeredRow}>
                            <IconButton
                                style={{backgroundColor: '#ffffff60', padding: 12, borderRadius: 32}}
                                icon={<ThumbsUpIcon color={'lightgreen'} />}
                                onPress={() => { setRating(WorkoutRating.ThumbsUp); setModalType(ModalType.None); }}
                                onPressColor={'#ffffff20'}
                            />
                            <Space width={20}/>
                            <IconButton
                                style={{backgroundColor: '#ffffff60', padding: 12, borderRadius: 32}}
                                icon={<DoubleThumbsUpIcon color={'lime'} />}
                                onPress={() => { setRating(WorkoutRating.DoubleThumbsUp); setModalType(ModalType.None); }}
                                onPressColor={'#ffffff20'}
                            />
                            <Space width={20}/>
                            <IconButton
                                style={{backgroundColor: '#ffffff60', padding: 12, borderRadius: 32}}
                                icon={<ThumbsDownIcon color={'red'} />}
                                onPress={() => { setRating(WorkoutRating.ThumbsDown); setModalType(ModalType.None); }}
                                onPressColor={'#ffffff20'}
                            />
                        </View>
                    </View>
                )
            case ModalType.None:
            default:
                return null;
        }
    }, [modalType, selectedWorkout, setWeight, setSetCount, setRepitionCount, setRating]);

    const modalHeight = useMemo(() => {
        switch (modalType) {
            case ModalType.Info:
                return '50%';
            case ModalType.Menu:
                return '30%';
            case ModalType.Rating:
                return '30%';
            case ModalType.None:
            default:
                return undefined;
        }
    }, [modalType]);

    return (
        <Fragment>
            <HelfyCommonModal
                isVisible={modalContents !== null}
                title={selectedWorkout.name.toUpperCase()}
                headerColor={getWorkoutTypeColor(workoutType)}
                height={modalHeight}
                onClose={() => setModalType(ModalType.None)}
            >
                {modalContents}
            </HelfyCommonModal>
            <View style={styles.container} >

                <CheckButton
                    isChecked={isChecked}
                    onPress={() => { setChecked(!isChecked); !isChecked && setModalType(ModalType.Rating); }}
                    style={isChecked ? styles.checkedButton : styles.uncheckedButton}
                />
                <View style={styles.workoutTitleContainer}>
                    <Text
                        numberOfLines={1}
                        style={styles.workoutTitle}
                    >
                        {selectedWorkout.name.toUpperCase()}
                    </Text>
                    <IconButton
                        style={styles.iconButton}
                        icon={<InfoCircleIcon color={'#CFCFCF'}/>}
                        onPress={() => setModalType(ModalType.Info)}
                        onPressColor={'#00000040'}
                    />
                </View>
                <WorkoutLabel
                    {...selectedWorkout}
                    onPress={() => setModalType(ModalType.Menu)}
                />
            </View>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    centeredRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3B463C',
        width: '90%',
        marginLeft: 20,
        paddingHorizontal: 10,
        height: 58,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 18
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: 'white',
    },
    modalTextInput: {
        fontSize: 20,
        color: '#CCCCCC',
        backgroundColor: '#FFFFFF10',
        paddingHorizontal: 18,
        paddingVertical: 14,
        borderRadius: 12,
    },
    modalLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#3B463C',
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
    modalTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 145,
        marginLeft: 24,
    },
    uncheckedButton: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        position: 'absolute',
        left: -16,
    },
    checkedButton: {
        backgroundColor: '#78CF81',
        height: 32,
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        position: 'absolute',
        left: -16,
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
    },
    picker: {
        width: 90,
        height: 110,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    removeButton: {
        position: 'absolute',
        top: -20,
        right: -20,
        padding: 12,
        backgroundColor: '#F54949',
        borderRadius: 100,
    }
});
