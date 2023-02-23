// workout-list-item.tsx

import React, { Fragment, useMemo, useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { MuscleGroup, Workout } from '../types';
import {
    InfoCircleIcon,
    ThreeDotsIcon,
    TrashIcon,
} from '../icons/icons';
import { CheckButton } from './check-button';
import { IconButton } from './icon-button';
import { Picker } from '@react-native-picker/picker';
import { HelfyModal } from './helfy-modal';
import { WorkoutLabel } from './workout-label';
import { getMuscleGroupLabelColor } from '../muscle-group-helpers';
import { Space } from './space';

enum ModalType {
    None = 'None',
    Menu = 'Menu',
    Info = 'Info',
    Rating = 'Rating',
};


type WorkoutListItemProps = {
    workout: Workout,
    muscleGroup: MuscleGroup,
    remove?: () => void,
};


export const WorkoutListItem = ({
    workout,
    muscleGroup,
    remove
}: WorkoutListItemProps) => {
    const [isChecked, setChecked] = useState(false); 

    const muscleGroupColor = getMuscleGroupLabelColor(muscleGroup);

    const [weight, setWeight] = useState(270);
    const [setCount, setSetCount] = useState(3);
    const [repitionCount, setRepitionCount] = useState(8);

    const [modalType, setModalType] = useState<ModalType>(ModalType.None);

    const modalContents = useMemo(() => {
        switch (modalType) {
            case ModalType.Info:
                return (
                    <Fragment>
                        <View style={{...styles.modalLabel, backgroundColor: muscleGroupColor}}>
                            <Text style={styles.modalTitle}>{workout.name.toUpperCase()}</Text>
                        </View>
                        <View style={{...styles.modalContainer, height: '50%'}}>
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
                    </Fragment>
                );
            case ModalType.Menu:
                return (
                    <Fragment>
                        <View style={{...styles.modalLabel, backgroundColor: muscleGroupColor}}>
                            <Text style={styles.modalTitle}>{workout.name.toUpperCase()}</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={{...styles.modalContainer, height: '30%'}}>
                                {
                                    remove &&
                                    <TouchableHighlight
                                        onPress={() => { setModalType(ModalType.None); remove(); }}
                                        style={styles.removeButton}
                                    >
                                        <TrashIcon color={'white'} />
                                        {/* <Text style={styles.modalText}>{'REMOVE'}</Text> */}
                                    </TouchableHighlight>
                                }
                                <View style={{ flexDirection: 'column' }}>
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
                                            value={weight.toString()}
                                            maxLength={4}
                                        />
                                    </View>
                                    <Space height={36}/>
                                    <View style={styles.centeredRow}>
                                        <Text style={styles.modalText}>{'SETS: '}</Text>
                                        <Picker
                                            style={styles.picker}
                                            mode='dropdown'
                                            selectedValue={setCount}
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
                                            selectedValue={repitionCount}
                                            onValueChange={(itemValue) => setRepitionCount(itemValue)}
                                        >
                                            {[...Array(50).keys()].map(n => (
                                                <Picker.Item label={n.toString()} value={n} color='white' key={n} />
                                            ))}
                                        </Picker>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Fragment>
                );
            case ModalType.Rating:
            case ModalType.None:
            default:
                return null;
        }
    }, [modalType, workout, weight, setCount, repitionCount]);

    return (
        <Fragment>
            <HelfyModal
                backdropOpacity={0.7}
                backdropColor='black'
                isVisible={modalContents !== null}
                onClose={() => setModalType(ModalType.None)}
                style={styles.modal}
            >
                {modalContents}
            </HelfyModal>
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
                        onPress={() => setModalType(ModalType.Info)}
                        onPressColor={'#00000040'}
                    />
                </View>
                <WorkoutLabel weight={weight} setCount={setCount} repitionCount={repitionCount} />
                <IconButton
                    style={styles.menuButton}
                    icon={<ThreeDotsIcon color={'#CFCFCF'}/>}
                    onPress={() => setModalType(ModalType.Menu)}
                    onPressColor={'#00000040'}
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
        width: '95%',
        paddingHorizontal: 10,
        height: 58,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
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
        width: '80%',
        backgroundColor: '#242424',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        // overflow: 'hidden',
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
    },
    picker: {
        width: 90,
        height: 110,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    removeButton: {
        position: 'absolute',
        top: -18,
        right: -18,
        padding: 12,
        backgroundColor: '#F54949',
        borderRadius: 100,
    }
});
