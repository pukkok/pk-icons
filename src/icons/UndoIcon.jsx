export const UndoIcon = ({ size = 24, className = '', style, ...props }) => (
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
    {/* 반원 궤적 (절대 고정) */}
    <path d="M3 12a9 9 0 1 1 9 9" />

    {/* 삼각형 화살촉: 크기 키우고, 12도 시계방향 회전된 정삼각형 */}
    <path
      d="M3 14 L0.5 8.8 L7.2 9.2 Z"
      fill="currentColor"
    />
  </svg>
)
