import { create } from 'zustand'

interface StatusFilterInterface {
  statusValue: string | undefined
  setStatusValue: (value: string | undefined) => void
}

export const useStatusFilter = create<StatusFilterInterface>((set) => ({
  statusValue: undefined,
  setStatusValue: (statusValue) => set({ statusValue }),
}))
