// check-button.tsx

import React, { Fragment } from 'react';
import { StyleProp, StyleSheet, TouchableHighlight, ViewStyle } from 'react-native';
import { CheckIcon } from '../icons/check-icon';

type CheckButtonProps = {
    isChecked: boolean,
    onPress?: () => void,
    style?: StyleProp<ViewStyle>,
};

export const CheckButton = ({
    isChecked,
    onPress,
    style
}: CheckButtonProps) => {
    const onPressColor = StyleSheet.flatten(style).backgroundColor?.toString();
    return (
        <TouchableHighlight style={style} onPress={onPress} underlayColor={onPressColor && onPressColor + '80'}>
            <Fragment>
                {
                    isChecked &&
                    <CheckIcon color='#303730' />
                }
            </Fragment>
        </TouchableHighlight>
    );
}
