export const ArrowIcon = ({ size = 24, direction = 'down', style = {}, className = '', ...props }) => {
  
  const angleMap = {
    up: '180deg',
    down: '0deg',
    left: '-90deg',
    right: '90deg'
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${angleMap[direction] || '0deg'})`,
        transition: 'transform 0.2s ease',
        ...style
      }}
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
        1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      />
    </svg>
  )
}
