import * as React from 'react';

function SvgYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 13.2578L13.2 11.9999L11 10.742V13.2578ZM15.4585 11.0383C15.9865 11.3569 16.1578 12.0458 15.8409 12.5769C15.7468 12.7347 15.6154 12.8669 15.4585 12.9616L10.6887 15.84C10.1606 16.1587 9.47572 15.9865 9.1589 15.4554C9.05492 15.2811 9 15.0816 9 14.8784V9.12146C9 8.50209 9.4992 8 10.115 8C10.3171 8 10.5154 8.05524 10.6887 8.15982L15.4585 11.0383Z"
        fill="white"
        fillOpacity="0.5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 18C10.5523 18 11 18.4477 11 19C11 19.5523 10.5523 20 10 20H7C4.23858 20 2 17.7614 2 15V9C2 6.23858 4.23858 4 7 4H17C19.7614 4 22 6.23858 22 9V15C22 17.7614 19.7614 20 17 20H14C13.4477 20 13 19.5523 13 19C13 18.4477 13.4477 18 14 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6H7C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H10Z"
        fill="white"
      />
    </svg>
  );
}

export default SvgYoutube;
