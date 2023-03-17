// sparkle-icon.tsx

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const SparkleIcon = (props: SvgProps) => (
    <Svg
    width={24}
    height={24}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zm8.446-7.189L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zm-1.365 11.852L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z"
    />
  </Svg>
);

/*

export const SparkleIcon = (props: SvgProps) => (
    <Svg
    width={16}
    height={20}
    preserveAspectRatio='xMinYMin slice'
    fill='currentColor'
    viewBox='0 0 16 20'
    {...props}
  >
    <Path
      d="M8.571 7.809a.452.452 0 0 1 .858 0l.806 2.421a3.613 3.613 0 0 0 2.286 2.285l2.42.806a.452.452 0 0 1 0 .858l-2.421.806a3.614 3.614 0 0 0-2.285 2.286l-.806 2.42a.451.451 0 0 1-.858 0l-.806-2.421a3.612 3.612 0 0 0-2.285-2.285l-2.421-.806a.452.452 0 0 1 0-.858l2.421-.806a3.612 3.612 0 0 0 2.285-2.285l.806-2.421ZM3.743 1.435a.271.271 0 0 1 .515 0l.483 1.453a2.17 2.17 0 0 0 1.372 1.37l1.452.485a.271.271 0 0 1 0 .515l-1.452.483A2.168 2.168 0 0 0 4.74 7.113l-.483 1.452a.271.271 0 0 1-.515 0l-.484-1.452A2.168 2.168 0 0 0 1.888 5.74L.435 5.258a.271.271 0 0 1 0-.515l1.453-.484a2.167 2.167 0 0 0 1.37-1.371l.485-1.453ZM12.579.124a.18.18 0 0 1 .342 0l.323.967c.143.433.482.772.915.915l.967.323a.182.182 0 0 1 .089.276.182.182 0 0 1-.089.066l-.967.323a1.445 1.445 0 0 0-.915.915l-.323.967a.182.182 0 0 1-.342 0l-.323-.967a1.446 1.446 0 0 0-.915-.915l-.966-.323a.181.181 0 0 1 0-.342l.967-.323c.433-.143.772-.482.915-.915l.322-.966V.124Z"
    />
  </Svg>
);

*/