// workout-label.tsx

import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { DotIcon } from '../icons/icons';

type WorkoutLabelProps = {
    weight: number,
    setCount: number,
    repitionCount: number,
    onPress?: () => void,
};

export const WorkoutLabel = ({
    weight,
    setCount,
    repitionCount,
    onPress,
}: WorkoutLabelProps) => {
    return (
        <TouchableHighlight
            style={styles.container}
            onPress={onPress}
            underlayColor={styles.innerContainer.backgroundColor}
        >
            <Fragment>
                <Text style={styles.weightText}>{weight}</Text>
                <View style={styles.innerContainer}>
                    <Text>{setCount}</Text>
                    <DotIcon color={'#303730'}/>
                    <Text>{repitionCount}</Text>
                </View>
            </Fragment>
        </TouchableHighlight>
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
        backgroundColor: '#dedede',
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
