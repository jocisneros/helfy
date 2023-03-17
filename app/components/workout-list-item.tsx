// workout-list-item.tsx

import { StyleSheet, View, Text, TouchableHighlight, ActivityIndicator } from 'react-native';
import { SelectedWorkout, Workout, WorkoutRating, WorkoutType } from '../types';
import { Fragment, useCallback, useMemo, useState } from 'react';
import { CheckButton } from './check-button';
import { HelfyCommonModal } from './helfy-common-modal';
import { getWorkoutTypeColor } from '../workout-type-helpers';
import { Space } from './space';
import YoutubeIframe from 'react-native-youtube-iframe';
import { SparkleIcon } from '../icons/sparkle-icon';
import { HelfyColorPalette } from '../theme';

type WorkoutDifficultyProps = {
    difficulty: number,
}

const WorkoutDifficulty = ({
    difficulty
}: WorkoutDifficultyProps) => {

    let difficultyText = 'I'
    switch (difficulty) {
        case 1:
            difficultyText = 'II'
        case 2:
            difficultyText = 'III'
    }

    return (
        <View style={styles.difficultyContainer}>
            <Text style={styles.difficultyText}>{difficultyText}</Text>
        </View>
    )
}

type WorkoutListItemProps = {
    workout: Workout,
    workoutType: WorkoutType,
    addSelectedWorkout: (selectedWorkout: SelectedWorkout) => void,
    recommended?: boolean,
}

export const WorkoutListItem = ({
    workout,
    workoutType,
    addSelectedWorkout,
    recommended,
}: WorkoutListItemProps) => {
    const [isChecked, setChecked] = useState(false); 
    const [showModal, setShowModal] = useState(false);
    const [waitForVideoLoad, setWaitForVideoLoad] = useState(true);

    const demoVideo = useMemo(() => {
        if (workout.link === '') {
            return null;
        }

        return (
            <View style={{ width: '100%', height: 200, justifyContent:'center', alignItems: 'center' }}>
                {
                    waitForVideoLoad &&
                    <ActivityIndicator
                        color={'white'}
                        size={'large'}
                        style={{ position: 'absolute', width: '100%', height: '100%' }}
                    />
                }
                <YoutubeIframe
                    videoId={workout.link.slice(-11)}
                    height={189}
                    width={336}
                    onReady={() => setWaitForVideoLoad(false)}
                    webViewStyle={{ borderRadius: 16 }}
                />
            </View>
        );
    }, [waitForVideoLoad, workout.link]);

    const workoutTips = workout.tips.split('. ').filter(tip => tip.length > 5);

    
    return (
        <Fragment>
            <HelfyCommonModal
                isVisible={showModal}
                title={workout.name.toUpperCase()}
                headerColor={getWorkoutTypeColor(workoutType)}
                height={'60%'}
                width={'95%'}
                onClose={() => {setShowModal(false); setWaitForVideoLoad(true);}}
            >
                <View style={[styles.modalContainer, { paddingVertical: 16 }]}>
                        <View style={{height: '55%', width: '100%', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            <Text style={[styles.modalText, { fontSize: 20 }]}>{'DEMO'}</Text>
                            {demoVideo}
                        </View>
                        <View style={{height: '45%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <Space height={16}/>
                            <Text style={[styles.modalText, { fontSize: 20 }]}>{'TIPS'}</Text>
                            <Space height={16}/>
                            <View style={{ width: '100%', height: '80%', alignItems: 'center', justifyContent: 'space-evenly', }}>
                                {
                                    workoutTips.map((tip, index) => (
                                        <View
                                            key={index}
                                            style={{ width: '85%', flexDirection: 'row', marginBottom: 12, }}
                                        >
                                            <Text style={[styles.modalSubText]}>
                                                {index + 1 + '. '}
                                            </Text>
                                            <Text style={[styles.modalSubText]}>
                                                {tip}
                                            </Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
            </HelfyCommonModal>
                <View style={recommended ? styles.workoutContainerRecommended : styles.workoutContainer}>
                    <CheckButton
                        isChecked={isChecked}
                        onPress={() => { 
                            setChecked(!isChecked); 
                            !isChecked && addSelectedWorkout({
                                ...workout,
                                weight: 0,
                                setCount: 0,
                                repititionCount: 0,
                                rating: WorkoutRating.Incomplete,
                            }); 
                        }}
                        style={isChecked ? styles.checkedButton : styles.uncheckedButton}
                    />
                    <TouchableHighlight
                        onPress={() => setShowModal(true)} style={{ width: '90%', height: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: '5%' }}
                        underlayColor={'#00000020'}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    width: '75%'
                                }}
                            >
                                <Text 
                                    style={[styles.workoutText, !recommended && { width: '87.5%' }]}
                                    numberOfLines={1}
                                >
                                    {workout.name}
                                </Text>
                                {
                                    recommended &&
                                    <View style={{ width: '30%' }}>
                                        <SparkleIcon color={'white'} width={30} height={30} />
                                    </View>
                                }
                            </View>
                            <View style={{ width: '25%', alignItems: 'center' }}>
                                <WorkoutDifficulty
                                    difficulty={workout.difficulty}
                                />
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    workoutText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: 'white',
        width: '75%',
        marginLeft: 12,
    },
    workoutContainerRecommended: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: HelfyColorPalette.primary4,
        width: '80%',
        marginLeft: 20,
        height: 50,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
	workoutContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: HelfyColorPalette.primary2,
        width: '80%',
        marginLeft: 20,
        height: 50,
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    difficultyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 25,
    },
    difficultyText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        width: 20
    },
    iconButton: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 99,
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
    modalContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: 'white',
    },
    modalSubText: {
        fontFamily: 'Lato_400Regular',
        color: 'white',
        fontSize: 15,
    },
});
