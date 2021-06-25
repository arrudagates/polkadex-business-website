import * as React from 'react';

function SvgWhatsapp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.512 12.067C7.174 11.453 7 10.878 7 10.342c0-.607.163-1.118.48-1.564a2.92 2.92 0 01.333-.39l.047-.05.008-.009-.009.01.013-.014A.999.999 0 018.592 8c.206 0 .345.002.468.008h.046c.266 0 .406.088.554.388l.017.037v.001l.02.043.327.768c.258.607.382.894.41.95.099.191.106.342.02.509l-.035.068-.039.075a1.222 1.222 0 01-.183.267l-.12.141c-.1.118-.149.173-.19.217l-.238.25.185.292c.344.539.76 1.036 1.226 1.438.385.332.78.6 1.2.817.152.078.455.214.69.314l.285.122.208-.233c.28-.315.57-.661.676-.815.17-.248.313-.282.666-.157.16.056.983.436 1.656.761l.195.093c.073.034.116.056.155.08.08.047.123.087.156.14.098.158.063.678-.13 1.203-.181.49-1.054 1.082-1.711 1.176-.578.084-1.068.057-1.563-.095-.537-.165-.918-.3-1.382-.494-.82-.343-1.616-.864-2.384-1.554a11.96 11.96 0 01-1.647-1.823l-.127-.17a5.755 5.755 0 01-.491-.75z"
        fill="#fff"
        fillOpacity={0.5}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.442 19.556l3.082-.925a8 8 0 10-2.157-2.157l-.925 3.082zm-1.245-2.808A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.955 9.955 0 01-4.75-1.198l-3.834 1.15a1.1 1.1 0 01-1.37-1.37l1.15-3.834z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgWhatsapp;