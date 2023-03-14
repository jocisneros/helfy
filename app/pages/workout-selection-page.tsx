// workout-selection-page.tsx

import { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelfyCommonModal } from '../components/helfy-common-modal';
import { HelfyHttpClient } from '../helfy-http-client';
import { HelfyColorPalette } from '../theme';
import { Workout, WorkoutSelectionPageNavigationProp, WorkoutType } from '../types';

export const WorkoutSelectionPage = ({ route, navigation }: WorkoutSelectionPageNavigationProp) => {
    const [workoutList, setWorkoutList] = useState<Workout[]>([])

    const {
        userId,
        workoutType,
        addSelectedWorkout
    } = route.params;

    useEffect(() => {
        HelfyHttpClient.getWorkoutList(userId, workoutType).then(
            data => setWorkoutList(data)
        )
    }, [userId, workoutType]);

	return (
		<Fragment>
			<HelfyCommonModal>

			</HelfyCommonModal>
			<SafeAreaView style={styles.container}>
				<View style={styles.sectionLabel}>
                    <Text style={styles.sectionTitle}>{'WORKOUT SELECTION'}</Text>
                </View>
				<ScrollView>
					{
                        workoutList.map((workout, index) => (
                            <View style={{ backgroundColor: 'white', marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between' }} key={index}>
                                <Text style={{ color: 'black' }}>{workout.name}</Text>
                                <Text style={{ color: 'black' }}>{workout.difficulty}</Text>
                            </View>
                        ))
                    }
				</ScrollView>
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
