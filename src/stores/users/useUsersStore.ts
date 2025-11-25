import { create } from 'zustand'
import type { UsersDataInterface } from '@/interfaces'

export const useUsersStore = create<UsersDataInterface>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}))
