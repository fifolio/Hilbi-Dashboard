import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import type { CardStructure } from '@/interfaces'
import {
  fetchTotalActiveUsers,
  fetchTotalInactiveUsers,
  fetchTotalUsers,
} from '@/services'

type CardsProps = {
  cardStructure: CardStructure
}

export default function Cards({ cardStructure }: CardsProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [totalUsers, setTotalUsers] = useState<number | null>(null)
  const [activeUsers, setActiveUsers] = useState<number | null>(null)
  const [InactiveUsers, setInactiveUsers] = useState<number | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadUsers = async () => {
      const totalUsers = await fetchTotalUsers()
      const activeUsers = await fetchTotalActiveUsers()
      const inactiveUsers = await fetchTotalInactiveUsers()

      if (isMounted) {
        // only update state if mounted
        setTotalUsers(totalUsers)
        setActiveUsers(activeUsers)
        setInactiveUsers(inactiveUsers)

        setLoading(false)
      }
    }

    loadUsers()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="tw:w-full tw:h-[118px] tw:rounded-xl tw:py-3 tw:bg-white tw:border tw:border-gray-200 tw:space-y-2 tw:text-black">
      <div className="tw:px-3 tw:flex tw:justify-between tw:items-center">
        <h6 className="tw:font-semibold">{cardStructure.title}</h6>
        {cardStructure.icon}
      </div>
      <hr className="tw:text-gray-200" />
      <div className="tw:px-3 tw:mt-3">
        <h2 className="tw:text-[24px] tw:font-semibold!">
          {loading ? (
            <Spin size="small" />
          ) : cardStructure.title === 'Total users' ? (
            totalUsers
          ) : cardStructure.title === 'Active users' ? (
            activeUsers
          ) : cardStructure.title === 'Inactive users' ? (
            InactiveUsers
          ) : null}
        </h2>
        <h6 className="tw:text-gray-500 tw:text-[12px]">
          {cardStructure.description}
        </h6>
      </div>
    </div>
  )
}
