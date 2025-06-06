import {
  ArrowIcon,
  ChevronIcon,
  HamburgerToggleIcon,
  HeartIcon,
  MoreVerticalIcon,
  BookmarkIcon,
  DoubleChevronIcon,
  SearchIcon,
  UndoIcon,
  RedoIcon
} from 'pk-icons'

const allDirections = ['up', 'down', 'left', 'right']
const horizontalDirections = ['left', 'right']

export const activeIcons = [
  { name: 'HeartIcon', Component: HeartIcon },
  { name: 'BookmarkIcon', Component: BookmarkIcon },
  { name: 'HamburgerToggleIcon', Component: HamburgerToggleIcon }
]

export const directionalIcons = [
  { name: 'ArrowIcon', Component: ArrowIcon, directions: allDirections },
  { name: 'ChevronIcon', Component: ChevronIcon, directions: allDirections },
  { name: 'DoubleChevronIcon', Component: DoubleChevronIcon, directions: horizontalDirections }
]

export const basicIcons = [
  { name: 'MoreVerticalIcon', Component: MoreVerticalIcon },
  { name: 'SearchIcon', Component: SearchIcon },
  { name: 'UndoIcon', Component: UndoIcon },
  { name: 'RedoIcon', Component: RedoIcon },
]
