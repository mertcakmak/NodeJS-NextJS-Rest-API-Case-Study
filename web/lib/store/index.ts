import create from 'zustand'

interface IState {
  searchText: string
  setSearchText: (val: string) => void
  page: number
  setPage: (val: number) => void
}

export const useStore = create<IState>((set) => ({
  searchText: '',
  setSearchText: (val) => set({ searchText: val }),
  page: 1,
  setPage: (val) => set({ page: val }),
}))
