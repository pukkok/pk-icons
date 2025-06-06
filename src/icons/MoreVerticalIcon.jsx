export const MoreVerticalIcon = ({ size = 24, className = '', style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    className={className}
    style={style}
    {...props}
  >
    <circle cx="12" cy="5" r="1.2" />
    <circle cx="12" cy="10" r="1.2" />
    <circle cx="12" cy="15" r="1.2" />
  </svg>
)
