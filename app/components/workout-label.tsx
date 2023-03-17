// workout-label.tsx

import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

type WorkoutLabelProps = {
    weight: number,
    setCount: number,
    repititionCount: number,
    onPress?: () => void,
};

export const WorkoutLabel = ({
    weight,
    setCount,
    repititionCount,
    onPress,
}: WorkoutLabelProps) => {
    return (
        <TouchableHighlight
            style={styles.container}
            onPress={onPress}
            underlayColor={styles.innerContainer.backgroundColor}
        >
            <Fragment>
                <Text style={styles.primaryText}>{weight}</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.secondaryText}>{setCount}</Text>
                    <View style={styles.bar}/>
                    <Text style={styles.secondaryText}>{repititionCount}</Text>
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
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 12,
        backgroundColor: 'white',
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#dedede',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        borderColor: '#303730',
        borderWidth: 1,
    },
    primaryText: {
        fontFamily: 'Lato_700Bold',
        color: 'black',
        fontSize: 18,
        width: 38,
        textAlign: 'center',
    },
    secondaryText: {
        fontFamily: 'Lato_700Bold',
        color: 'black',
        fontSize: 16,
        width: 20,
        textAlign: 'center',
    },
    bar: {
        width: 1.25,
        height: 14,
        backgroundColor: 'black',
        marginHorizontal: 4,
    }
});
