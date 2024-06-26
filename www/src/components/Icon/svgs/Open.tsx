import React from 'react';
import { IconProps } from '../types';

function OpenIcon(props: Omit<IconProps, 'type'>) {
  return (
    <svg
      fill="#fff"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 16"
      id="link-out-icon"
    >
      <path
        fillRule="evenodd"
        d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
      ></path>
    </svg>
  );
}

export default React.memo(OpenIcon);
