import { useFilterResults } from "@/stores"

export default function FiltersResults() {

  const {totalUsersValue, filteredUsers} = useFilterResults()

  return (
    <div className="tw:space-y-4 tw:text-gray-500 tw:text-[14px]">
        Showing <b className="tw:text-black">{filteredUsers}</b> of <b className="tw:text-black">{totalUsersValue}</b> users
    </div>
  )
}