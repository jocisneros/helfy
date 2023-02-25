// plus-circle-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path, ClipPath, Defs, G } from 'react-native-svg';

export const PlusCircleIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM12.75 6.75a.75.75 0 1 0-1.5 0v4.5h-4.5a.75.75 0 1 0 0 1.5h4.5v4.5a.75.75 0 1 0 1.5 0v-4.5h4.5a.75.75 0 1 0 0-1.5h-4.5v-4.5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
