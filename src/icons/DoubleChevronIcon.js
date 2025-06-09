export const DoubleChevronIcon = ({ direction = 'right', size = 16, style = {}, className = '', ...props }) => {
  const paths = {
    right: [
      'M5 5l7 7-7 7',
      'M12 5l7 7-7 7',
    ],
    left: [
      'M19 19L12 12L19 5',
      'M12 19L5 12L12 5',
    ]
  }

  const dValues = paths[direction] || paths.right

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
      {dValues.map((d, idx) => (
        <path key={idx} d={d} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  )
}
