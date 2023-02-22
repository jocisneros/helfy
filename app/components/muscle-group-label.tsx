// muscle-group-label.tsx

import { useCallback } from 'react';
import { MuscleGroup } from '../types';
import { Text, TouchableHighlight, View } from 'react-native';
import { getMuscleGroupLabelColor } from '../muscle-group-helpers';

type MuscleGroupLabelProps = {
    muscleGroup: MuscleGroup,
    onPress?: () => void,
    halfPill?: boolean,
};

export const MuscleGroupLabel = ({
    muscleGroup,
    onPress,
}: MuscleGroupLabelProps ) => {
    const labelColor = getMuscleGroupLabelColor(muscleGroup);

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
                {muscleGroup.toUpperCase()}
            </Text>
        </TouchableHighlight>
    )
};
