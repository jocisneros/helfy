// workout-selection-page.tsx

import { Fragment } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HelfyCommonModal } from '../components/helfy-common-modal';
import { WorkoutSelectionPageNavigationProp } from '../types';

export const WorkoutSelectionPage = ({ route, navigation }: WorkoutSelectionPageNavigationProp) => {
	return (
		<Fragment>
			<HelfyCommonModal>

			</HelfyCommonModal>
			<SafeAreaView style={styles.container}>
				<View style={styles.sectionLabel}>
                    <Text style={styles.sectionTitle}>{'WORKOUT SELECTION'}</Text>
                </View>
				<ScrollView>
					
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
        backgroundColor: '#303730',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
	backButton: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#888888',
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
        backgroundColor: '#3B463C',
        marginBottom: 20,
        paddingHorizontal: 24,
        borderRadius: 36,
        height: 36,
    },
});
