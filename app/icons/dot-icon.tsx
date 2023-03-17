// dot-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';


export const DotIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 16 16'
    {...props}
  >
      <Path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </Svg>
);
