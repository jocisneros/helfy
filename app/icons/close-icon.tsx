// close-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const CloseIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <Path
      d="M2.594 2.594a1.402 1.402 0 0 1 1.985 0L12 10.017l7.421-7.423a1.405 1.405 0 0 1 1.986 1.985L13.983 12l7.424 7.421a1.405 1.405 0 0 1-1.986 1.986l-7.42-7.424-7.422 7.424a1.403 1.403 0 0 1-2.396-.993 1.404 1.404 0 0 1 .41-.993l7.425-7.42-7.424-7.422a1.402 1.402 0 0 1 0-1.985Z"
    />
  </Svg>
);
