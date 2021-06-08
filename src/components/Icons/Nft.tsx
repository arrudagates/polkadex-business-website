import * as React from 'react';

function SvgNft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.499 8.542a1.165 1.165 0 01-1.165-1.165V6.29c0-.644.521-1.165 1.165-1.165h3.96a5.125 5.125 0 015.125 5.125v3.96c0 .643-.522 1.165-1.165 1.165h-1.087a1.165 1.165 0 01-1.165-1.165v-3.96c0-.943-.764-1.708-1.708-1.708h-3.96z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.75 29.042v1.708a5.125 5.125 0 01-5.126 5.125H8.541a5.125 5.125 0 01-5.125-5.125V17.083a5.125 5.125 0 015.125-5.125h1.708V10.25a5.125 5.125 0 015.125-5.125H24.6c.566 0 1.025.459 1.025 1.025v1.367c0 .566-.459 1.025-1.025 1.025h-9.225c-.943 0-1.708.765-1.708 1.708v1.708h11.958a5.125 5.125 0 015.125 5.125v8.542h1.709c.943 0 1.708-.765 1.708-1.708v-5.809c0-.566.459-1.025 1.025-1.025h1.367c.566 0 1.025.46 1.025 1.025v5.809a5.125 5.125 0 01-5.125 5.125h-1.709zm-5.15 3.416c.967 0 1.732-.765 1.732-1.708V17.083c0-.943-.765-1.708-1.708-1.708H8.54c-.943 0-1.708.765-1.708 1.708v3.73a6.836 6.836 0 018.225 1.102L25.6 32.458zm-2.538-8.541a2.563 2.563 0 110-5.125 2.563 2.563 0 010 5.125zM8.54 32.459h12.228l-8.127-8.127c-1.334-1.335-3.832-1.734-5.809.473v5.945c0 .944.765 1.709 1.708 1.709z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgNft;
