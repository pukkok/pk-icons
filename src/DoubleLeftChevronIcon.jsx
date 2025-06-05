export const DoubleLeftChevronIcon = ({ size = 16, style = {}, className = '', ...props }) => {
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 19L12 12L19 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19L5 12L12 5" />
    </svg>
  )
}
