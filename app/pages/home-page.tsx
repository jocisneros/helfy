// home-page.tsx

import React, { useCallback, useState, useMemo } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, SafeAreaView, Pressable, Button} from 'react-native';
import Modal from 'react-native-modal';
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
    const [modalContents, setModalContents] = useState<React.ReactNode>(null)

    const showModal = useMemo(() => modalContents !== null, [modalContents]);

    const closeModal = useCallback(() => setModalContents(null), []);

    return (
      <SafeAreaView style={styles.container}>
        <Modal
            isVisible={showModal}
            backdropColor='black'
            backdropOpacity={0.5}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {modalContents}
            <TouchableHighlight
                onPress={closeModal}
                style={{
                    marginTop: 16,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    backgroundColor: '#F54949',
                    borderRadius: 100,
                }}
                underlayColor='#F5494980'
            >
                <Text style={{
                    fontFamily: 'Lato_700Bold',
                    fontSize: 18,
                    color: '#FFFFFF',
                }}>CLOSE</Text>
            </TouchableHighlight>
        </Modal>
        <View style={styles.header}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 5,
            }} >
                <IconButton
                    onPress={() => setDate(prevDate => addDays(prevDate, -1))}
                    style={styles.iconButton}
                    icon={<ChevronLeftIcon color={'#CFCFCF'}/>}
                    onPressColor={'#00000040'}
                />
                <Pressable style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                }}>
                    <CalendarIcon color={'#CFCFCF'}/>
                    <Text style={{
                        fontFamily: 'Lato_700Bold',
                        fontSize: 24,
                        color: '#CFCFCF',
                        width: 150,
                        textAlign: 'center',
                    }}>{format(date, 'E - MMM d')}</Text>
                </Pressable>
                <IconButton
                    onPress={() => setDate(prevDate => addDays(prevDate, 1))}
                    style={styles.iconButton}
                    icon={<ChevronRightIcon color={'#CFCFCF'}/>}
                    onPressColor={'#00000040'}
                />
            </View>
            <MuscleGroupLabel
                muscleGroup={MuscleGroup.Legs}
                setModalContents={setModalContents}
            />
        </View>
        <View style={styles.body}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>WORKOUTS</Text>
                <IconButton
                    icon={<ThreeDotsVerticalIcon color={'#CFCFCF'} />}
                    style={styles.iconButton}
                    onPressColor={'#00000040'}
                />
            </View>
            <View style={styles.workoutList}>
                {mockLegs.map((workout, i) => (
                    <WorkoutListItem workout={workout} key={i} setModalContents={setModalContents} />
                ))}
                <IconButton
                    onPress={() => navigation.navigate('WorkoutSelection')}
                    icon={<PlusCircleIcon color={'#CFCFCF'} />}
                    style={styles.iconButton}
                    onPressColor={'#00000040'}
                />
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>STEPS</Text>
            </View>
        </View>
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A302A',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Lato_400Regular',
    },
    header: {
        backgroundColor: '#3C443C',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    body: {
        backgroundColor: '#445046',
        width: '95%',
        flex: 7,
        margin: 16,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        overflow: 'hidden',
    },
    footer: {
        backgroundColor: '#445046',
        width: '95%',
        flex: 1,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        overflow: 'hidden',
    },
    workoutList: {
        display: 'flex',
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: '#CFCFCF',
    },
    sectionHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        backgroundColor: '#3C443C',
        paddingHorizontal: 20,
        paddingVertical: 6,
        top: 0,
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
    }
});
