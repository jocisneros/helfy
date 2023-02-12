// dot-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


export const DotIcon = (props: SvgProps) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-dot"
      {...props}
    >
      <Path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </Svg>
);
