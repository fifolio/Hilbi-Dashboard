import { Button } from 'antd'
import { usePagination } from '@/stores'

export default function Pagination() {
  const { page, pageSize, totalItems, setPage } = usePagination()

  const totalPages = Math.ceil(totalItems / pageSize)

  const canGoPrev = page > 1
  const canGoNext = page < totalPages

  return (
    <div className="tw:flex tw:items-center tw:justify-between">
      <div className="tw:text-sm tw:text-muted-foreground tw:mr-2">
        Page <span className="tw:font-semibold tw:text-foreground">{page}</span>{' '}
        of{' '}
        <span className="tw:font-semibold tw:text-foreground">
          {totalPages}
        </span>
      </div>

      <div className="tw:flex tw:gap-2">
        <Button
          onClick={() => canGoPrev && setPage(page - 1)}
          disabled={!canGoPrev}
          variant="outlined"
          className="tw:gap-1"
        >
          Previous
        </Button>

        <Button
          onClick={() => canGoNext && setPage(page + 1)}
          disabled={!canGoNext}
          variant="outlined"
          className="tw:gap-1"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
