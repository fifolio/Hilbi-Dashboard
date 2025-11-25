import { useRouterState } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export default function TitleArea() {
  const { t } = useTranslation()
  const { location } = useRouterState()
  const path = location.pathname
  const isInHome: string | boolean = path === '/' ? true : false
  const isInUsersList: string | boolean = path === '/users/list' ? true : false
  return (
    <h2 className="tw:md:text-[30px] tw:text-[25px] tw:text-black tw:font-semibold">
      {isInHome && <span>{t('dashboard.description')}</span>}
      {isInUsersList && <span>{t('usersList.title')}</span>}
      {isInUsersList && <div className="tw:text-[14px] tw:font-normal tw:text-gray-500 tw:ml-[2px]">{t('usersList.description')}</div>}
    </h2>
  )
}
