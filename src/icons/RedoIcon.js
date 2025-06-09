export const RedoIcon = ({ size = 24, className = '', style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
    {...props}
  >
    {/* 반원 궤적 (좌우 반전됨) */}
    <path d="M21 12a9 9 0 1 0-9 9" />

    {/* 삼각형 화살촉 (좌우 반전 좌표) */}
    <path
      d="M21 14 L23.5 8.8 L16.8 9.2 Z"
      fill="currentColor"
    />
  </svg>
)
