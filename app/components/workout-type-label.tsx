// workout-type-label.tsx

import { WorkoutType } from '../types';
import { Text, TouchableHighlight, View } from 'react-native';
import { getWorkoutTypeColor } from '../workout-type-helpers';

type WorkoutTypeLabelProps = {
    workoutType: WorkoutType,
    onPress?: () => void,
    halfPill?: boolean,
};

export const WorkoutTypeLabel = ({
    workoutType,
    onPress,
}: WorkoutTypeLabelProps ) => {
    const labelColor = getWorkoutTypeColor(workoutType);

    return (
        <TouchableHighlight
            style={{
                backgroundColor: labelColor,
                paddingVertical: 7,
                paddingHorizontal: 18,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 36,
            }}
            onPress={onPress}
            underlayColor={labelColor + '80'}
        >
            <Text style={{ fontFamily: 'Lato_700Bold', color: 'white', fontSize: 16 }}>
                {workoutType.toUpperCase()}
            </Text>
        </TouchableHighlight>
    )
};
