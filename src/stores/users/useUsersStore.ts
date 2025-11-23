import type { UsersDataInterface } from "@/interfaces";
import { create } from "zustand";

export const useUsersStore = create<UsersDataInterface>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
}));
