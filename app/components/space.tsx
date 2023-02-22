// space.tsx

import React from 'react';
import { View } from 'react-native';

type SpaceProps = {
    width?: number,
    height?: number,
};

export const Space = ({
    width,
    height,
}: SpaceProps) => {
    return <View style={{ width: width || 0, height: height || 0 }}></View>
};
