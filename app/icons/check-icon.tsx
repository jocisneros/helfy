// check-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CheckIcon = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 18 18'
    {...props}
  >
    <Path
      d="M14.193 3.972a1.35 1.35 0 0 1 1.926 1.89l-7.183 8.982a1.35 1.35 0 0 1-1.944.036L2.23 10.117A1.35 1.35 0 1 1 4.138 8.21l3.769 3.768 6.251-7.965c.011-.014.022-.027.035-.04Z"
    />
  </Svg>
);
