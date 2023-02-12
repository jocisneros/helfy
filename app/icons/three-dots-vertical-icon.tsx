// three-dots-vertical-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ThreeDotsVerticalIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-three-dots-vertical"
      {...props}
    >
      <Path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
    </Svg>
);
