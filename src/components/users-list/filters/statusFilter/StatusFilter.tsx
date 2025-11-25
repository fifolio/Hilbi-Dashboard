import { Button } from 'antd'
import { usePagination, useStatusFilter } from '@/stores'

export default function StatusFilter() {
  const { statusValue, setStatusValue } = useStatusFilter()
  const { setPage } = usePagination()

  const statuses = [
    { value: undefined, label: 'All Users' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
  ]

  return (
    <div className="tw:flex tw:flex-wrap tw:gap-2">
      {statuses.map((status) => (
        <Button
          key={status.value}
          onClick={() => {
            setStatusValue(status.value)
            setPage(1)
          }}
          color="default"
          variant={statusValue === status.value ? 'solid' : 'outlined'}
          className="tw:rounded-full!"
        >
          {status.label}
        </Button>
      ))}
    </div>
  )
}
