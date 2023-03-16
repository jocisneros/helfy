// workout-selection-page.tsx

import { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelfyCommonModal } from '../components/helfy-common-modal';
import { WorkoutListItem } from '../components/workout-list-item';
import { useSelectedWorkouts } from '../helfy-context';
import { HelfyHttpClient } from '../helfy-http-client';
import { HelfyColorPalette } from '../theme';
import { SelectedWorkout, Workout, WorkoutSelectionPageNavigationProp, WorkoutType } from '../types';

export const WorkoutSelectionPage = ({ route, navigation }: WorkoutSelectionPageNavigationProp) => {
    const [selectedWorkouts, setSelectedWorkouts] = useSelectedWorkouts();
    const [workoutList, setWorkoutList] = useState<Workout[]>([])
    const [isLoading, setLoading] = useState(false);

    const {
        userId,
        workoutType,
    } = route.params;

    useEffect(() => {
        setLoading(true);
        HelfyHttpClient.getWorkoutList(userId, workoutType).then(
            data => {
                setWorkoutList(data);
                setLoading(false);
            }
        )
    }, [userId, workoutType]);

    const addSelectedWorkout = (selectedWorkout: SelectedWorkout) => {
        setSelectedWorkouts(prevSelectedWorkouts => [...prevSelectedWorkouts, selectedWorkout]);
    }

	return (
		<Fragment>
			<HelfyCommonModal>

			</HelfyCommonModal>
			<SafeAreaView style={styles.container}>
				<View style={styles.sectionLabel}>
                    <Text style={styles.sectionTitle}>{'WORKOUT SELECTION'}</Text>
                </View>
                {
                    isLoading
                    ? (
                        <ActivityIndicator
                            color={'white'}
                            size={'large'}
                            style={{ width: '100%', height: '70%' }}
                        />
                    ) : (
                        <View style={{ width: '100%', height: '70%' }}>
                            <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>
                                {
                                    workoutList.map((workout, index) => (
                                        <WorkoutListItem
                                            key={index}
                                            workout={workout}
                                            workoutType={workoutType}
                                            addSelectedWorkout={addSelectedWorkout}
                                            recommended={index < 5}
                                        />
                                    ))
                                }
                            </ScrollView>
                        </View>
                    )
                }
				<TouchableHighlight
					onPress={() => navigation.goBack()}
                    style={styles.backButton}
                    underlayColor={styles.backButton.backgroundColor + '80'}
                >
                    <Text style={styles.sectionTitle}>{'BACK'}</Text>
                </TouchableHighlight>
			</SafeAreaView>
		</Fragment>
	)
}
const styles = StyleSheet.create({
	container: {
        backgroundColor: HelfyColorPalette.primary0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    workoutContainer: {
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
	backButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: HelfyColorPalette.primary1,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
	sectionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 20,
        color: 'white',
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
});
