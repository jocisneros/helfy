// icon-button.tsx

import React from 'react';
import { TouchableHighlight, StyleProp, ViewStyle } from 'react-native';

type IconButtonProps = {
    icon: React.ReactNode,
    onPress?: () => void,
    onPressColor?: string,
    style?: StyleProp<ViewStyle>
};

export const IconButton = ({
    icon,
    onPress,
    onPressColor,
    style
}: IconButtonProps) => {
    return (
        <TouchableHighlight style={style} onPress={onPress} underlayColor={onPressColor}>
            {icon}
        </TouchableHighlight>
    );
}
