export const ChevronIcon = ({ direction = 'right', size = 16, style = {}, className = '', ...props }) => {
  
  const angleMap = {
    up: '-90deg',
    down: '90deg',
    left: '180deg',
    right: '0deg'
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      style={{
        transform: `rotate(${angleMap[direction] || '0deg'})`,
        transition: 'transform 0.2s ease',
        ...style
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
