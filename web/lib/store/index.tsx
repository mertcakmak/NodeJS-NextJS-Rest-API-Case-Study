import create from 'zustand'

interface IState {
  searchText: string
  setSearchText: (val: string) => void
}

export const useStore = create<IState>((set) => ({
  searchText: '',
  setSearchText: (val) => set({ searchText: val }),
}))
