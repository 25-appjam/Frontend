export const CloseIcon = ({ size = 32, color = "#FFE5CA" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="16" cy="16.5" rx="12" ry="12.375" fill="#FA9884" />
      <path
        d="M21.3333 11L10.6666 22"
        stroke={color}
        stroke-width="2.75225"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6666 11L21.3333 22"
        stroke={color}
        stroke-width="2.75225"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
