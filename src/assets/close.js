export const CloseIcon = ({ size = 15, color = "#FFE5CA" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.6667 2L2.00006 13"
        stroke={color}
        stroke-width="2.75225"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.00002 2L12.6667 13"
        stroke={color}
        stroke-width="2.75225"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
