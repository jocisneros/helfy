// chevron-right-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ChevronRightIcon = (props: SvgProps) => (
  <Svg
    width={16}
    height={16}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 16 16'
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </Svg>
);
