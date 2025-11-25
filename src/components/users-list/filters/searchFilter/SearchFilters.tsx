import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { usePagination, useSearchFilter } from '@/stores'

export default function SearchFilters() {
  const { setSearchValue } = useSearchFilter()
  const { setPage } = usePagination()

  return (
    <div className="tw:flex">
      <SearchOutlined className="tw:text-gray-500! tw:absolute tw:z-10 tw:mt-[9px] tw:ml-3 " />
      <Input
        onChange={(e) => {
          setSearchValue(e.target.value.trim())
          setPage(1)
        }}
        placeholder="Search by email..."
        className="tw:pl-9! tw:shadow-xs!"
      />
    </div>
  )
}
