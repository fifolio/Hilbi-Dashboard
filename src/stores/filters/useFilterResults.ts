import { create } from 'zustand'

interface FilterResultsInterface {
  totalUsersValue: number | null
  filteredUsers: number | null
  setTotalUsersValue: (value: number | null) => void
  setFilteredUsers: (value: number | null) => void
}

export const useFilterResults = create<FilterResultsInterface>((set) => ({
  totalUsersValue: 0,
  filteredUsers: 0,
  setTotalUsersValue: (totalUsersValue) => set({ totalUsersValue }),
  setFilteredUsers: (filteredUsers) => set({ filteredUsers }),
}))
