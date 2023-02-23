// space.tsx

import React from 'react';
import { View } from 'react-native';

type SpaceProps = {
    width?: number | string,
    height?: number | string,
};

export const Space = ({
    width,
    height,
}: SpaceProps) => {
    return <View style={{ width: width, height: height }} />
};
