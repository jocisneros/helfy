// workout-label.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DotIcon } from '../icons/icons';

type WorkoutLabelProps = {
    weight: number,
    setCount: number,
    repitionCount: number
};

export const WorkoutLabel = ({
    weight,
    setCount,
    repitionCount,
}: WorkoutLabelProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.weightText}>{weight}</Text>
            <View style={styles.innerContainer}>
                <Text>{setCount}</Text>
                <DotIcon color={'#303730'}/>
                <Text>{repitionCount}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#BABABA',
        paddingHorizontal: 4,
        borderRadius: 20,
    },
    weightText: {
        fontFamily: 'Lato_700Bold',
        color: '#303730',
        fontSize: 16,
        paddingRight: 4,
    },
    countText: {
        fontFamily: 'Lato_700Bold',
        color: '#303730',
        fontSize: 14,
    }
});
