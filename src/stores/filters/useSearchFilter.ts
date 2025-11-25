import { create } from 'zustand'

interface SearchFilterInterface {
  searchValue: string | undefined
  setSearchValue: (value: string | undefined) => void
}

export const useSearchFilter = create<SearchFilterInterface>((set) => ({
  searchValue: undefined,
  setSearchValue: (searchValue) => set({ searchValue }),
}))
