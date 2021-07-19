import * as React from 'react';

function SvgKyc(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={14.088}
        y={36.882}
        width={7.765}
        height={3.882}
        rx={1.165}
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.96 40.765a1.165 1.165 0 01-1.165-1.165v-1.553c0-.643.521-1.164 1.164-1.164h2.33a.388.388 0 00.388-.389V33a7.765 7.765 0 00-7.765-7.765H16.03A7.765 7.765 0 008.265 33v3.494c0 .215.174.389.388.389h2.33c.643 0 1.165.521 1.165 1.164V39.6c0 .643-.522 1.165-1.165 1.165H5.548A1.165 1.165 0 014.383 39.6V33c0-4.686 2.768-8.726 6.758-10.574a9.676 9.676 0 01-2.876-6.896c0-5.36 4.346-9.706 9.706-9.706 5.36 0 9.706 4.345 9.706 9.706 0 2.697-1.1 5.137-2.876 6.896A11.649 11.649 0 0131.559 33v6.6c0 .643-.521 1.165-1.164 1.165h-5.436zm-6.99-19.412a5.823 5.823 0 100-11.647 5.823 5.823 0 000 11.647zM37.203 14.8l4.858-4.858a.806.806 0 011.14 0l1.71 1.71a.807.807 0 010 1.141l-7.16 7.16a1.165 1.165 0 01-1.646 0l-4.309-4.308a.807.807 0 010-1.14l1.71-1.712a.806.806 0 011.141 0l2.007 2.007a.388.388 0 00.549 0z"
      />
    </svg>
  );
}

export default SvgKyc;
