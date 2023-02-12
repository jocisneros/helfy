// muscle-group-label.tsx

import { useCallback } from 'react';
import { MuscleGroup } from '../types';
import { Text, TouchableHighlight, View } from 'react-native';

function getMuscleGroupLabelColor(muscleGroup: MuscleGroup): string {
    switch (muscleGroup) {
        case MuscleGroup.Arms:
            return '#D763C4';
        case MuscleGroup.Legs:
            return '#7363D7';
        case MuscleGroup.Push:
            return '#63D77D';
        case MuscleGroup.Pull:
            return '#63C2D7';
        case MuscleGroup.UpperBody:
            return '#D76363';
        case MuscleGroup.LowerBody:
            return '#6398D7';
        case MuscleGroup.FullBody:
            return '#D7AF63';
        case MuscleGroup.ChestAndBack:
            return '#A82B67';
    }
    return '';
}

function getMuscleGroupDescription(muscleGroup: MuscleGroup): string {
    switch (muscleGroup) {
        case MuscleGroup.Arms:
            return 'Arms Description';
        case MuscleGroup.Legs:
            return 'Legs Description';
        case MuscleGroup.Push:
            return 'Push Description';
        case MuscleGroup.Pull:
            return 'Pulls Description';
        case MuscleGroup.UpperBody:
            return 'Upper Body Description';
        case MuscleGroup.LowerBody:
            return 'Lower Body Description';
        case MuscleGroup.FullBody:
            return 'Full Body Description';
        case MuscleGroup.ChestAndBack:
            return 'Chest and Back Description';
    }
    return '';
}

type MuscleGroupLabelProps = {
    muscleGroup: MuscleGroup,
    setModalContents?: (element: React.ReactNode) => void,
};

export const MuscleGroupLabel = ({
    muscleGroup,
    setModalContents,
}: MuscleGroupLabelProps ) => {
    const labelColor = getMuscleGroupLabelColor(muscleGroup);
    const openMuscleGroupModal = useCallback(() => setModalContents && setModalContents(
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
                }}>{muscleGroup.toUpperCase()}</Text>
            </View>
            <Text style={{
                fontFamily: 'Lato_400Regular',
                fontSize: 16,
                color: '#FFF',
            }}>{getMuscleGroupDescription(muscleGroup)}</Text>
        </View>
    ), [setModalContents, muscleGroup]);

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
            onPress={openMuscleGroupModal}
            underlayColor={labelColor + '80'}
        >
            <Text style={{ fontFamily: 'Lato_700Bold', color: 'white', fontSize: 16 }}>
                {muscleGroup.toUpperCase()}
            </Text>
        </TouchableHighlight>
    )
};
