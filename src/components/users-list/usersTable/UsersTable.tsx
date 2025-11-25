import { Avatar, Badge, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { fetchAllUsers } from '@/services/users/fetchAllUsers'
import {
  useFilterResults,
  usePagination,
  useSearchFilter,
  useStatusFilter,
} from '@/stores'
import { formatDate } from '@/helpers'

export default function UsersTable() {
  const [loading, setLoading] = useState<boolean>(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<Array<any>>([])

  const { page, pageSize, setTotalItems } = usePagination()
  const { searchValue } = useSearchFilter()
  const { statusValue } = useStatusFilter()
  const { setTotalUsersValue, setFilteredUsers } = useFilterResults()

  useEffect(() => {
    let isMounted = true

    const loadUsers = async () => {
      if (isMounted) setLoading(true)

      const result = await fetchAllUsers(
        page,
        pageSize,
        searchValue,
        statusValue,
      )

      if (isMounted) {
        const items = result?.items || []
        const filtered = items.length
        const total = result?.pagination?.total || 0

        setUsers(items)
        setFilteredUsers(filtered)
        setTotalUsersValue(total)
        setTotalItems(total)
        setLoading(false)
      }
    }

    loadUsers()

    return () => {
      isMounted = false
    }
  }, [
    searchValue,
    statusValue,
    page,
    pageSize,
    setTotalUsersValue,
    setFilteredUsers,
    setTotalItems,
  ])

  if (loading) {
    return (
      <center className="tw:mt-20">
        <Spin size="large" />
      </center>
    )
  }

  if (users.length === 0) {
    return (
      <div className="tw:flex tw:items-center tw:justify-center tw:py-12">
        <p className="tw:text-muted-foreground">No users found</p>
      </div>
    )
  }

  return (
    <div className="tw:overflow-x-auto tw:overflow-scroll tw:h-[400px] tw:rounded-xl tw:bg-white tw:border tw:border-gray-200">
      <table className="tw:w-full tw:rounded-sm">
        <thead className="tw:sticky tw:top-0 tw:z-10">
          <tr className="tw:border-b tw:bg-gray-50 tw:border-gray-200  tw:z-10">
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Name
            </th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Email
            </th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Status
            </th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Address
            </th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Balance
            </th>
            <th className="tw:px-6 tw:py-4 tw:text-left tw:text-sm tw:font-semibold tw:text-foreground">
              Created
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="tw:border-b tw:border-gray-200 tw:border-border hover:tw:bg-muted/30 tw:transition-colors"
            >
              {/* Name */}
              <td className="tw:px-6 tw:py-4">
                <div className="tw:flex tw:items-center tw:gap-3">
                  <Avatar className="tw:min-h-8 tw:min-w-8 tw:rounded-full tw:bg-[#FF9C6E]!">
                    {user.firstName[0]}
                    {user.lastName[0]}
                  </Avatar>
                  <div className="tw:flex tw:flex-col">
                    <span className="tw:font-medium tw:text-foreground">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                </div>
              </td>

              {/* Email */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:text-sm tw:text-muted-foreground">
                  {user.email}
                </span>
              </td>

              {/* Status */}
              <td className="tw:px-6 tw:py-4">
                <Badge
                  className={`
                    tw:border
                    tw:p-2! 
                    tw:rounded-full 
                    tw:capitalize
                    ${user.status === 'pending' && 'tw:bg-yellow-200 tw:border-yellow-300 tw:text-yellow-800!'}
                    ${user.status === 'active' && 'tw:bg-green-200 tw:border-green-300 tw:text-green-800!'}
                    ${user.status === 'inactive' && 'tw:bg-red-200 tw:border-red-300 tw:text-red-800!'}
                    `}
                >
                  {user.status}
                </Badge>
              </td>

              {/* Address */}
              <td className="tw:px-6 tw:py-4">
                <div className="tw:flex tw:flex-col tw:text-sm">
                  <span className="tw:text-foreground">
                    {user.address.city}
                  </span>
                  <span className="tw:text-xs tw:text-muted-foreground">
                    {user.address.country}
                  </span>
                </div>
              </td>

              {/* Balance */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:font-medium tw:text-foreground">
                  {user.account.balance} {user.account.currency}
                </span>
              </td>

              {/* Created */}
              <td className="tw:px-6 tw:py-4">
                <span className="tw:text-sm tw:text-muted-foreground">
                  {formatDate(user.createdAt)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
