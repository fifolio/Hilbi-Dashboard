import type { User } from '@/interfaces'
import { formatDate } from '@/helpers'

interface UserDetailsProps {
  data: User
}

export default function UserDetails({ data }: UserDetailsProps) {
  return (
    <div className="tw:flex tw:items-center tw:w-full tw:text-black tw:py-3 tw:hover:bg-gray-100 tw:px-3 tw:border-b tw:border-gray-200">
      {/* USER AVATAR */}
      <div className="tw:bg-[#FF9C6E] tw:text-white tw:rounded-full tw:w-8 tw:h-8  tw:flex tw:items-center tw:justify-center">
        <span>
          {data.firstName[0]}
          {data.lastName[0]}
        </span>
      </div>

      {/* USERNAME & EMAIL */}
      <div className="tw:flex-1 tw:ml-3 tw:space-y-1">
        <div className="tw:font-semibold">
          {data.firstName} {data.lastName}
        </div>
        <div className="tw:text-gray-500">{data.email}</div>
      </div>

      {/* LAST ACTIVE DATE */}
      <div className="tw:text-[14px] tw:text-gray-500">
        {formatDate(data.updatedAt)}
      </div>
    </div>
  )
}
