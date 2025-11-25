import { useRouterState } from '@tanstack/react-router'
import Breadcrumb from './Breadcrumb'
import TitleArea from './TitleArea'

export default function Header() {
  const { location } = useRouterState()
  const path = location.pathname
  const isInUsersList: string | boolean = path === '/users/list' ? true : false

  return (
    <div className={`tw:w-full ${isInUsersList ? 'tw:h-[140px]' : 'tw:h-[118px]'} tw:rounded-xl tw:p-6 tw:bg-white tw:border tw:border-gray-200 tw:space-y-2`}>
      <Breadcrumb />
      <TitleArea />
    </div>
  )
}
