import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
      }}
      width={200}
      height={200}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <g>
        <path d="M50 15a35 35 0 1024.749 10.251" fill="none" stroke="#f2a07e" strokeWidth={12} />
        <path d="M49 3v24l12-12L49 3" fill="#f2a07e" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
