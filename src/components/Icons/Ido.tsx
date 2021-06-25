import * as React from 'react';

function SvgIdo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.035 30.76h3.215V18.619c0-.357.288-.647.643-.647h1.928c.355 0 .643.29.643.647v12.143h3.215V9.714c0-.358.288-.648.643-.648h1.928c.355 0 .643.29.643.648v21.047c.888 0 1.608.725 1.608 1.619s-.72 1.619-1.608 1.619H10.53c-2.412 0-2.605-3.238-.193-3.238h5.056v-8.905c0-.357.288-.647.643-.647h1.929c.355 0 .643.29.643.647v8.905h3.214v-5.667c0-.357.288-.647.643-.647h1.928c.356 0 .643.29.643.647v5.667z"
        fill="#fff"
      />
      <path
        d="M8.621 32.336l3.203-.361v-4.21a.645.645 0 00-.643-.647H9.252a.645.645 0 00-.643.648l.012 4.57z"
        fill="#fff"
      />
      <path
        opacity={0.5}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.944 17.809V32.38c0 .894-.72 1.62-1.607 1.62a1.613 1.613 0 01-1.608-1.62V1.619C1.73.725 2.45 0 3.337 0c.887 0 1.607.725 1.607 1.619C7.623.539 9.766 0 11.373 0c1.607 0 3.214.54 4.822 1.619 1.607 1.08 3.214 1.619 4.821 1.619 1.893 0 3.518-.539 4.875-1.616.098-.077.262-.238.449-.43.397-.41 1.105-.137 1.105.434v14.053c0 .331-.111.652-.315.912-1.569 1.892-3.607 2.837-6.114 2.837-1.607 0-3.214-.54-4.821-1.619-1.608-1.08-3.215-1.619-4.822-1.619-1.607 0-3.75.54-6.43 1.619zM24.23 6.555a.4.4 0 00-.498-.388l-.144.037c-.82.18-1.68.272-2.573.272-2.275 0-4.493-.744-6.605-2.163-1.102-.74-2.1-1.075-3.038-1.075-1.126 0-2.903.448-5.235 1.387l-.868.35a.521.521 0 00-.326.483v8.317a.4.4 0 00.534.377l.105-.037c2.224-.768 4.138-1.163 5.79-1.163 2.275 0 4.492.745 6.604 2.163 1.103.74 2.1 1.075 3.04 1.075 1.166 0 2.1-.294 2.898-.931.2-.176.316-.43.316-.697V6.555z"
        fill="#fff"
      />
      <g filter="url(#IDO_svg__filter0_d)" fill="#fff">
        <path d="M9.81 6.885v5.656H8.407V6.885H9.81zM13.288 6.885c.843 0 1.487.245 1.933.737.451.491.677 1.188.677 2.091 0 .903-.226 1.6-.677 2.091-.446.492-1.09.737-1.933.737h-2.284V6.885h2.284zm-.139 4.542c.457 0 .789-.143.995-.428.213-.292.319-.72.319-1.286 0-.566-.106-.991-.319-1.277-.206-.291-.538-.437-.995-.437h-.742v3.428h.742zM19.273 6.799c.544 0 1.012.117 1.403.351.397.229.702.56.914.995.212.434.318.957.318 1.568 0 .611-.106 1.134-.318 1.569a2.312 2.312 0 01-.914 1.002c-.391.229-.859.343-1.403.343-.543 0-1.014-.114-1.41-.343a2.312 2.312 0 01-.915-1.002c-.212-.435-.318-.958-.318-1.569s.107-1.134.319-1.568c.212-.435.516-.766.913-.995.397-.234.868-.351 1.411-.351zm0 1.157c-.26 0-.481.066-.66.197-.18.131-.316.329-.408.591-.093.258-.139.58-.139.969 0 .383.046.706.139.969.092.262.228.46.408.591.179.131.4.197.66.197.261 0 .479-.066.653-.197.18-.131.315-.329.408-.591.092-.263.138-.586.138-.969 0-.389-.046-.711-.138-.969-.093-.262-.229-.46-.408-.59a1.052 1.052 0 00-.653-.198z" />
      </g>
      <ellipse cx={3.393} cy={31.086} rx={2.893} ry={2.914} fill="#fff" />
      <defs>
        <filter
          id="IDO_svg__filter0_d"
          x={4.407}
          y={6.799}
          width={21.501}
          height={13.828}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgIdo;