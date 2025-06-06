export const HamburgerToggleIcon = ({ size = 24, isActive = false, className = '', style, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      {/* 상단 줄 */}
      <rect
        x="3"
        y="6"
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          transform: isActive ? 'rotate(45deg) translateY(4px)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease'
        }}
      />
      {/* 중간 줄 */}
      <rect
        x="3"
        y="12"
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          opacity: isActive ? 0 : 1,
          transition: 'opacity 0.3s ease'
        }}
      />
      {/* 하단 줄 */}
      <rect
        x="3"
        y="18"
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        style={{
          transform: isActive ? 'rotate(-45deg) translateY(-6px)' : 'none',
          transformOrigin: 'center',
          transition: 'transform 0.3s ease'
        }}
      />
    </svg>
  )
}
