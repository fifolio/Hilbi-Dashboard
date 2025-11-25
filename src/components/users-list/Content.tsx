import FiltersResults from './filters/filtersResults/FiltersResults'
import Pagination from './filters/pagination/Pagination'
import SearchFilters from './filters/searchFilter/SearchFilters'
import StatusFilter from './filters/statusFilter/StatusFilter'
import UsersTable from './usersTable/UsersTable'

export default function UsersListContent() {
  return (
    <div className="tw:space-y-4">
      <section className="tw:w-full tw:md:h-40 tw:rounded-xl tw:p-6 tw:bg-white tw:border tw:border-gray-200 tw:space-y-4">
        <SearchFilters />
        <div className="tw:md:flex tw:justify-between tw:items-start tw:space-y-3 tw:md:space-y-0">
          <div className="tw:flex-1">
            <StatusFilter />
          </div>
          <div className="tw:flex-1 tw:max-w-[260px]">
            <Pagination />
          </div>
        </div>
        <FiltersResults />
      </section>
      <main>
        <UsersTable />
      </main>
    </div>
  )
}
