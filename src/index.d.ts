import { FC, SVGProps, CSSProperties } from 'react'

type CommonIconProps = {
  size?: number
  style?: CSSProperties
  className?: string
} & SVGProps<SVGSVGElement>

type ActiveIconProps = CommonIconProps & {
  isActive?: boolean
}

declare module 'pk-icons' {
  export const ArrowIcon: FC<CommonIconProps & {
    direction?: 'up' | 'down' | 'left' | 'right'
  }>
  export const BookmarkIcon: FC<ActiveIconProps>
  export const ChevronIcon: FC<CommonIconProps & {
    direction?: 'up' | 'down' | 'left' | 'right'
  }>
  export const DoubleChevronIcon: FC<CommonIconProps & {
    direction?: 'left' | 'right'
  }>
  export const HamburgerToggleIcon: FC<ActiveIconProps>
  export const HeartIcon: FC<ActiveIconProps>
  export const MoreVerticalIcon: FC<CommonIconProps>
  export const RedoIcon: FC<CommonIconProps>
  export const SearchIcon: FC<CommonIconProps>
  export const UndoIcon: FC<CommonIconProps>
}
