type IconProps = {
  color?: string;
};

export const IconDecrement = ({ color = "#FFFFFF" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="2"
      fill="none"
      viewBox="0 0 10 2"
    >
      <path fill={color} d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  );
};
