import { FC, SVGProps, CSSProperties } from 'react'

type CommonIconProps = {
  size?: number
  style?: CSSProperties
  className?: string
} & SVGProps<SVGSVGElement>

declare module 'pk-icons' {
  export const HeartIcon: FC<CommonIconProps>
  export const ArrowIcon: FC<CommonIconProps>
  export const ChevronIcon: FC<CommonIconProps & {
    direction?: 'up' | 'down' | 'left' | 'right'
  }>
  export const DoubleLeftChevronIcon: FC<CommonIconProps>
  export const DoubleRightChevronIcon: FC<CommonIconProps>
}