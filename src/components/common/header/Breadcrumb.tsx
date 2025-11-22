import { useRouterState } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export default function Breadcrumb() {
  const { t } = useTranslation()
  const { location } = useRouterState()
  const path = location.pathname
  const isInUsersList: string | boolean = path === '/users/list' ? true : false

  return (
    <h6 className="tw:text-[14px] tw:font-normal tw:text-blue-950">
      <span className="tw:text-[#8C8C8C]">{t('dashboard.title')} </span>
      <span>
        {isInUsersList && <span>{t('usersList.breadcrumb-route')}</span>}
      </span>
    </h6>
  )
}
