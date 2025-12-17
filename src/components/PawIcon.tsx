interface PawIconProps {
  className?: string;
}

const PawIcon = ({ className = "" }: PawIconProps) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="50" cy="65" rx="22" ry="20" />
    <ellipse cx="28" cy="35" rx="12" ry="14" />
    <ellipse cx="72" cy="35" rx="12" ry="14" />
    <ellipse cx="15" cy="55" rx="10" ry="12" />
    <ellipse cx="85" cy="55" rx="10" ry="12" />
  </svg>
);

export default PawIcon;
