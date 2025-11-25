import { create } from 'zustand'

interface PaginationState {
  page: number
  pageSize: number
  totalItems: number
  setPage: (page: number) => void
  setTotalItems: (total: number) => void
}

export const usePagination = create<PaginationState>((set) => ({
  page: 1,
  pageSize: 10,
  totalItems: 0,
  setPage: (page) => set({ page }),
  setTotalItems: (total) => set({ totalItems: total }),
}))
