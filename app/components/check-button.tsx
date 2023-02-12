// check-button.tsx

import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
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
    return (
        <Pressable style={style} onPress={onPress}>
            {
                isChecked &&
                <CheckIcon color='#3B463C' />
            }
        </Pressable>
    );
}
