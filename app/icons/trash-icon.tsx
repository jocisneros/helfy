// trash-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path, Defs, G, ClipPath } from 'react-native-svg';

export const TrashIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M3.75 1.5A1.5 1.5 0 0 0 2.25 3v1.5A1.5 1.5 0 0 0 3.75 6h.75v13.5a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6h.75a1.5 1.5 0 0 0 1.5-1.5V3a1.5 1.5 0 0 0-1.5-1.5H15A1.5 1.5 0 0 0 13.5 0h-3A1.5 1.5 0 0 0 9 1.5H3.75Zm4.5 6a.75.75 0 0 1 .75.75v10.5a.75.75 0 1 1-1.5 0V8.25a.75.75 0 0 1 .75-.75Zm3.75 0a.75.75 0 0 1 .75.75v10.5a.75.75 0 1 1-1.5 0V8.25A.75.75 0 0 1 12 7.5Zm4.5.75v10.5a.75.75 0 1 1-1.5 0V8.25a.75.75 0 1 1 1.5 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);